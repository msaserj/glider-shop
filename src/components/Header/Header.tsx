import React from 'react';
import css from './Header.module.scss';
import pic from '../../assets/img/header-32-002.jpg';

export const Header = () => {
   return (
      <div className={css.header}>
         <h1 className={css.title}>Buy your one glider!</h1>
         <p className={css.description}>We fulfill your dream of flying!</p>
         <img src={pic} alt="pic" className={css.pic} />
      </div>
   );
};
