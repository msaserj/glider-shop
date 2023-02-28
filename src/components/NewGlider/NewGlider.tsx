import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './NewGlider.module.scss';
import { Input } from './Input/Input';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useFormik } from 'formik';
import { createGlider } from '../../store/glider/gliderSlice';
import { GliderType } from '../../store/gliders/glidersSlice';

export const NewGlider = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const error = useAppSelector(state => state.glider.errors);

  const formik = useFormik({
    initialValues: {
      make: '',
      model: '',
      price: 0,
      description: '',
      gliderImg: '',
      list: {
        fullDescription: '',
        glideRatio: '',
        motor: '',
        seats: 0,
        fuselageLength: 0,
        maxSpeed: 0,
        emptyMass: 0,
        maxTakeOfMass: 0,
        year: 0,
        oxygen: '',
        trailer: '',
        engine: ''
      }
    },

    onSubmit: (values: GliderType) => {
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
            htmlFor={'make'}
            label={'make'}
            getFieldProps={formik.getFieldProps('make')}
            errors={formik.errors.make}
            name={'make'}
            placeholder={'make'}
          />
          <Input
            type={'text'}
            htmlFor={'model'}
            label={'model'}
            getFieldProps={formik.getFieldProps('model')}
            errors={formik.errors.model}
            name={'model'}
            placeholder={'model'}
          />
          <Input
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
          <input
            id="file"
            name="gliderImg"
            type="file"
            onChange={e => {
              formik.setFieldValue('gliderImg', e.currentTarget.files![0]);
            }}
          />
          {/*techList*/}
          {Object.keys(formik.initialValues.list).map((key, index) => {
            return (
              <Input
                key={key}
                htmlFor={key}
                label={key}
                type={'text'}
                getFieldProps={formik.getFieldProps('list.' + key)}
              />
            );
          })}

          {/*<Input*/}
          {/*    type={'text'}*/}
          {/*    htmlFor={'fullDescription'}*/}
          {/*    label={'fullDescription'}*/}
          {/*    getFieldProps={formik.getFieldProps('list.fullDescription')}*/}
          {/*    errors={formik.errors.list?.fullDescription}*/}
          {/*    name={'fullDescription'}*/}
          {/*    placeholder={'fullDescription'}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*    type={'text'}*/}
          {/*    htmlFor={'glideRatio'}*/}
          {/*    label={'glideRatio'}*/}
          {/*    getFieldProps={formik.getFieldProps('list.glideRatio')}*/}
          {/*    errors={formik.errors.list?.glideRatio}*/}
          {/*    name={'glideRatio'}*/}
          {/*    placeholder={'glideRatio'}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*    type={'text'}*/}
          {/*    htmlFor={'motor'}*/}
          {/*    label={'motor'}*/}
          {/*    getFieldProps={formik.getFieldProps('list.motor')}*/}
          {/*    errors={formik.errors.list?.motor}*/}
          {/*    name={'motor'}*/}
          {/*    placeholder={'motor'}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*    type={'number'}*/}
          {/*    htmlFor={'seats'}*/}
          {/*    label={'seats'}*/}
          {/*    getFieldProps={formik.getFieldProps('list.seats')}*/}
          {/*    errors={formik.errors.list?.seats}*/}
          {/*    name={'seats'}*/}
          {/*    placeholder={'number'}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*    type={'number'}*/}
          {/*    htmlFor={'fuselageLength'}*/}
          {/*    label={'fuselageLength'}*/}
          {/*    getFieldProps={formik.getFieldProps('list.fuselageLength')}*/}
          {/*    errors={formik.errors.list?.fuselageLength}*/}
          {/*    name={'fuselageLength'}*/}
          {/*    placeholder={'number'}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*    type={'number'}*/}
          {/*    htmlFor={'maxSpeed'}*/}
          {/*    label={'maxSpeed'}*/}
          {/*    getFieldProps={formik.getFieldProps('list.maxSpeed')}*/}
          {/*    errors={formik.errors.list?.maxSpeed}*/}
          {/*    name={'maxSpeed'}*/}
          {/*    placeholder={'number'}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*    type={'number'}*/}
          {/*    htmlFor={'emptyMass'}*/}
          {/*    label={'emptyMass'}*/}
          {/*    getFieldProps={formik.getFieldProps('list.emptyMass')}*/}
          {/*    errors={formik.errors.list?.emptyMass}*/}
          {/*    name={'emptyMass'}*/}
          {/*    placeholder={'emptyMass'}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*    type={'number'}*/}
          {/*    htmlFor={'maxTakeOfMass'}*/}
          {/*    label={'maxTakeOfMass'}*/}
          {/*    getFieldProps={formik.getFieldProps('list.maxTakeOfMass')}*/}
          {/*    errors={formik.errors.list?.maxTakeOfMass}*/}
          {/*    name={'maxTakeOfMass'}*/}
          {/*    placeholder={'number'}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*    type={'number'}*/}
          {/*    htmlFor={'year'}*/}
          {/*    label={'year'}*/}
          {/*    getFieldProps={formik.getFieldProps('list.year')}*/}
          {/*    errors={formik.errors.list?.year}*/}
          {/*    name={'year'}*/}
          {/*    placeholder={'number'}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*    type={'text'}*/}
          {/*    htmlFor={'oxygen'}*/}
          {/*    label={'oxygen'}*/}
          {/*    getFieldProps={formik.getFieldProps('list.oxygen')}*/}
          {/*    errors={formik.errors.list?.oxygen}*/}
          {/*    name={'oxygen'}*/}
          {/*    placeholder={'oxygen'}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*    type={'text'}*/}
          {/*    htmlFor={'trailer'}*/}
          {/*    label={'trailer'}*/}
          {/*    getFieldProps={formik.getFieldProps('list.trailer')}*/}
          {/*    errors={formik.errors.list?.trailer}*/}
          {/*    name={'trailer'}*/}
          {/*    placeholder={'trailer'}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*    type={'text'}*/}
          {/*    htmlFor={'engine'}*/}
          {/*    label={'engine'}*/}
          {/*    getFieldProps={formik.getFieldProps('list.engine')}*/}
          {/*    errors={formik.errors.list?.engine}*/}
          {/*    name={'engine'}*/}
          {/*    placeholder={'engine'}*/}
          {/*/>*/}
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};
