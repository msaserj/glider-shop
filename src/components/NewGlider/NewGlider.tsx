import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './NewGlider.module.scss';
import { Input } from './Input/Input';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useFormik } from 'formik';
import { createGlider } from '../../store/glider/gliderSlice';

export const NewGlider = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const error = useAppSelector(state => state.glider.errors);

  const formik = useFormik({
    initialValues: {
      name: '',
      price: null,
      description: '',
      addDescription: '',
      range: null,
      gliderImg: null
    },

    onSubmit: (values: any) => {
      dispatch(createGlider(values));
      formik.resetForm();
    }
  });

  return (
    <div>
      <button onClick={() => navigate(-1)}>{'<-- Go back'}</button>

      <h1>Create Planer</h1>
      <div>
        <form className={css.form} onSubmit={formik.handleSubmit}>
          <Input
            htmlFor={'name'}
            label={'name'}
            getFieldProps={formik.getFieldProps('name')}
            errors={formik.errors.name}
            name={'name'}
            placeholder={'name'}
          />
          <Input
            type={'number'}
            htmlFor={'price'}
            label={'price'}
            getFieldProps={formik.getFieldProps('price')}
            errors={formik.errors.price}
            name={'price'}
            placeholder={'price'}
          />
          <Input
            htmlFor={'description'}
            label={'description'}
            getFieldProps={formik.getFieldProps('description')}
            errors={formik.errors.description}
            name={'description'}
            placeholder={'description'}
          />
          <Input
            htmlFor={'addDescription'}
            label={'addDescription'}
            getFieldProps={formik.getFieldProps('addDescription')}
            errors={formik.errors.addDescription}
            name={'addDescription'}
            placeholder={'addDescription'}
          />
          <Input
            type={'number'}
            htmlFor={'range'}
            label={'range'}
            getFieldProps={formik.getFieldProps('range')}
            errors={formik.errors.range}
            name={'range'}
            placeholder={'range'}
          />

          <input
            id="file"
            name="gliderImg"
            type="file"
            onChange={e => {
              formik.setFieldValue('gliderImg', e.currentTarget.files![0]);
            }}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};
