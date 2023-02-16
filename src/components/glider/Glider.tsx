import React from 'react';
import {GliderType} from "../../store/gliders/glidersSlice";
import {Link} from 'react-router-dom'
import {paths} from '../../paths'
import css from './Glider.module.scss'


export const Glider:React.FC<GliderType> = (
    {name,price,gliderImg,_id,range,description}
) => {
    return (
        <>
            <Link to={`${paths.glider}/${_id}`} className={css.glider}>
                <p>name: {name}</p>
                <p>description: {description}</p>
                <p>price {price}</p>
                <p>range {range}</p>
                <img style={{width: "250px", height: "150px"}} src={gliderImg} alt={name}/>
            </Link>
        </>
    );
};
