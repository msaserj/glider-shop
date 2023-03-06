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
    console.log();
    if (allGoods.find((el: { id: string | undefined }) => el.id === _id) === undefined) {
      allGoods.push({ id: _id, count: 1 });
      localStorage.setItem('cart', JSON.stringify(allGoods));
    } else {
      const index = allGoods.findIndex((el: { id: string | undefined }) => el.id === _id);

      localStorage.setItem('cart', JSON.stringify((allGoods[index] = { id: _id, count: +1 })));
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
          <h3>{make}</h3>
          <p className={css.description}>glide ratio {list.glideRatio}</p>
          <p className={css.description}>{description}</p>
          <p className={css.price}>€ {price.toLocaleString()}</p>
        </div>
      </Link>
      <button className={css.button} onClick={setToLocalStorage}>
        Add to cart
      </button>
    </div>
  );
};
