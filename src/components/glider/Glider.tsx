import React, { memo, useCallback } from 'react';
import { GliderType } from '../../store/gliders/glidersSlice';
import { Link } from 'react-router-dom';
import { paths } from '../../paths';
import css from './Glider.module.scss';
import { useAppDispatch } from '../../hooks/hooks';
import { getGlidersFromCart, setCountItem } from '../../store/cart/cartSlice';

export const Glider: React.FC<GliderType> = memo(
  ({ description, make, price, gliderImg, _id, count, list = {} }) => {
    const dispatch = useAppDispatch();
    const addToCartHandler = useCallback(() => {
      _id && dispatch(setCountItem({ _id }));
      dispatch(getGlidersFromCart());
    }, []);
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
            <p className={css.price}>count {count}</p>
          </div>
        </Link>
        <button className={css.button} onClick={addToCartHandler}>
          Add to cart
        </button>
      </div>
    );
  }
);
