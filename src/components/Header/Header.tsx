import React from 'react';
import css from './Header.module.scss'
import pic from '../../assets/img/32-Mi-Start-001.jpg'

export const Header = () => {
    return (
        <div className={css.header}>
            <h1 className={css.title}>Buy your one glider!</h1>
            <p className={css.description}>Buy your one glider and fly for free!</p>
            <img src={pic} alt='pic' className={css.pic}/>
        </div>
    );
};
