import React from 'react';
import css from './Header.module.scss';
import pic from '../../assets/img/header-32-002.jpg';
import pic2 from '../../assets/img/header-30-002.jpg';
import pic3 from '../../assets/img/header-21B-001.jpg';
import pic4 from '../../assets/img/header-29-003.jpg';

import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { GliderType } from '../../store/gliders/glidersSlice';

export const Header = () => {
  const cart = useAppSelector<GliderType[]>(state => state.cart.gliders);

  return (
    <div className={css.header}>
      <div className={css.photoBlock}>
        <h1 className={css.title}>Buy your one glider!</h1>
        <p className={css.description}>We fulfill your dream of flying!</p>
        <div>
          <img src={pic} alt="pic" className={`${css.pic} ${css.pic1}`} />
          <img src={pic2} alt="pic" className={`${css.pic} ${css.pic2}`} />
          <img src={pic3} alt="pic" className={`${css.pic} ${css.pic3}`} />
          <img src={pic4} alt="pic" className={`${css.pic} ${css.pic4}`} />
        </div>
      </div>

      <div className={css.menu}>
        <Link className={css.cart} to="/cart">
          <span>{cart ? cart.length : 0} </span> Cart
        </Link>
      </div>
    </div>
  );
};
