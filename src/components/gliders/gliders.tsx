import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getGliders, GliderType } from '../../store/gliders/glidersSlice';
import { Loader } from '../loader/Loader';
import { Glider } from '../glider/Glider';
import css from './gliders.module.scss';
import { Link } from 'react-router-dom';
import { paths } from '../../paths';
import { useSort } from '../../hooks/useSort';

export const Gliders = () => {
  const dispatch = useAppDispatch();
  const gliders = useAppSelector<GliderType[]>(state => state.gliders.gliders);
  const isLoading = useAppSelector(state => state.gliders.isLoading);
  const { isDescSort, setIsDescSort, sortedItems } = useSort(gliders || []);

  useEffect(() => {
    dispatch(getGliders());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }
  console.log(gliders);
  return (
    <div>
      <div className={css.sortBar}>
        <button onClick={() => setIsDescSort(!isDescSort)}>
          Sort by price {`${isDescSort ? ' up' : ' down'}`}
        </button>
        <Link to={paths.createGlider}>Create glider</Link>
      </div>
      <div className={css.gliders}>
        {sortedItems &&
          sortedItems.map(glider => {
            return (
              <Glider
                key={glider._id}
                _id={glider._id}
                description={glider.description}
                gliderImg={glider.gliderImg}
                name={glider.name}
                price={glider.price}
                range={glider.range}
                addDescription={glider.addDescription}
              />
            );
          })}
      </div>
    </div>
  );
};
