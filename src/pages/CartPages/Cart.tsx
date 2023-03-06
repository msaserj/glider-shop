import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getGlidersFromCart, setDefault } from '../../store/cart/cartSlice';
import { GliderType } from '../../store/gliders/glidersSlice';
import { Glider } from '../../components/glider/Glider';
import { Loader } from '../../components/loader/Loader';
import css from './Cart.module.scss';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector<GliderType[]>(state => state.cart.gliders);
  const isLoading = useAppSelector(state => state.gliders.isLoading);
  const navigate = useNavigate();

  const clearCart = () => {
    dispatch(setDefault());
  };

  useEffect(() => {
    dispatch(getGlidersFromCart());
    // const ids = localStorage.getItem('cart')
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  const summa = (arr: GliderType[]) => {
    let sum = 0;
    arr.forEach(el => {
      sum += el.price * el.count;
    });
    return sum;
  };
  return (
    <div>
      Cart {cart ? summa(cart) : 0}
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={clearCart}>Clear cart</button>
      <div className={css.items}>
        {cart &&
          cart.map(item => {
            return (
              <div key={item._id}>
                <Glider
                  count={item.count}
                  _id={item._id}
                  make={item.make}
                  model={item.model}
                  price={item.price}
                  description={item.description}
                  gliderImg={item.gliderImg}
                  list={item.list}
                />
                <button onClick={clearCart}>remove from cart</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
