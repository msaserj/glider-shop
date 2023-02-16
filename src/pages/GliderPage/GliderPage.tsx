import React, { useEffect } from 'react';
import css from './GliderPage.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getGlider, GliderType } from '../../store/glider/gliderSlice';
import { Loader } from '../../components/loader/Loader';

export const GliderPage = () => {
   const navigate = useNavigate();
   const { id } = useParams();
   const dispatch = useAppDispatch();
   const isLoading = useAppSelector(state => state.glider.isLoading);

   const glider = useAppSelector<GliderType>(state => state.glider.glider);

   useEffect(() => {
      if (id) {
         dispatch(getGlider(id));
      }
   }, [dispatch]);

   if (isLoading) return <Loader />;
   return (
      glider && (
         <div className={css.glider}>
            <button onClick={() => navigate(-1)}>Go back</button>
            <h1 className={css.title}>{glider.name}</h1>
            <img
               style={{ width: '250px', height: '150px' }}
               src={glider.gliderImg}
               alt={glider.name}
            />
            <p>{glider.price}</p>
            <p>{glider.description}</p>
            <button onClick={() => {}}>To cart</button>
            Glider
         </div>
      )
   );
};
