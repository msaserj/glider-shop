import React from 'react';
import { GliderType } from '../../store/gliders/glidersSlice';
import { Link } from 'react-router-dom';
import { paths } from '../../paths';
import css from './Glider.module.scss';

export const Glider: React.FC<GliderType> = ({
  description,
  make,
  price,
  gliderImg,
  _id,
  list = {}
}) => {
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
    <div className={css.glider}>
      <Link to={`${paths.glider}/${_id}`}>
        <img
          className={css.img}
          style={{ width: '250px', height: '150px' }}
          src={gliderImg}
          alt={make}
        />
        <div className={css.productList}>
          <h3>name: {make}</h3>
          <p className={css.description}>glide ratio {list.glideRatio}</p>
          <p className={css.description}>{description}</p>
          <p className={css.price}>€ {price}</p>
        </div>
      </Link>
      <button className={css.button} onClick={setToLocalStorage}>
        Add to cart
      </button>
    </div>
  );
};
