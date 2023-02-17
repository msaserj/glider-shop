import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
  ReactNode
} from 'react';
import css from './Input.module.scss';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperInputTextPropsType = Omit<DefaultInputPropsType, 'type'> & {
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  errors?: ReactNode;
  spanClassName?: string;
  placeholder?: string;
  htmlFor?: string;
  label?: string;
  getFieldProps?: any;
  children?: ReactNode;
  mustFilled?: boolean;
  type?: 'text' | 'number';
};

export const Input: React.FC<SuperInputTextPropsType> = ({
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  errors,
  label,
  htmlFor,
  mustFilled,
  className,
  spanClassName,
  getFieldProps,
  id,
  placeholder,
  type,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);

    onChangeText?.(e.currentTarget.value);
  };
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress?.(e);

    onEnter && e.key === 'Enter' && onEnter();
  };

  const finalSpanClassName = css.error + (spanClassName ? ' ' + spanClassName : '');
  const finalInputClassName =
    css.input +
    (errors ? ' ' + css.errorInput : ' ' + css.superInput) +
    (className ? ' ' + css.className : '');

  //   return (
  //     <div className={css.inputWrapper}>
  //       <input
  //         placeholder={placeholder}
  //         id={id}
  //         type={'text'}
  //         onChange={onChangeCallback}
  //         onKeyDown={onKeyPressCallback}
  //         className={finalInputClassName}
  //         {...restProps}
  //       />
  //       <span id={id ? id + '-span' : undefined} className={finalSpanClassName}>
  //         {error}
  //       </span>
  //     </div>
  //   );
  // };
  return (
    <div className={css.inputWrapper}>
      {label && (
        <label className={css.label} htmlFor={htmlFor}>
          {label} {mustFilled && <span> *</span>}
        </label>
      )}
      <div className={css.inputBlock}>
        <input
          className={finalInputClassName}
          placeholder={placeholder}
          id={htmlFor}
          type={type}
          {...getFieldProps}
          {...restProps}
        />
        <div className={finalSpanClassName}>
          <span>{errors ? errors : null}</span>
        </div>
      </div>
    </div>
  );
};
