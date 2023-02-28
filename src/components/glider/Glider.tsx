import React from 'react';
import { GliderType } from '../../store/gliders/glidersSlice';
import { Link } from 'react-router-dom';
import { paths } from '../../paths';
import css from './Glider.module.scss';

export const Glider: React.FC<GliderType> = ({ make, price, gliderImg, _id, list = {} }) => {
  const setToLocalStorage = () => {
    let allGoods = [];
    if (localStorage.getItem('cart')) {
      allGoods = JSON.parse(localStorage.getItem('cart') || '');
    }
    if (!allGoods.includes(_id)) {
      allGoods.push(_id);
      localStorage.setItem('cart', JSON.stringify(allGoods));
    }
  };
  return (
    <>
      <Link to={`${paths.glider}/${_id}`} className={css.glider}>
        <p>name: {make}</p>
        <p>price {price}</p>
        <p>glide ratio {list.glideRatio}</p>
        <p>ful descr {list.fullDescription}</p>
        <img style={{ width: '250px', height: '150px' }} src={gliderImg} alt={make} />
      </Link>
      <button onClick={setToLocalStorage}>Add to cart</button>
    </>
  );
};
