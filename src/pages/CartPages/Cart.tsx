import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getGlidersFromCart } from '../../store/cart/cartSlice';
import { GliderType } from '../../store/gliders/glidersSlice';
import { Glider } from '../../components/glider/Glider';

export const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector<GliderType[]>(state => state.cart.gliders);
  const isLoading = useAppSelector(state => state.gliders.isLoading);

  const clearCart = () => {
    localStorage.setItem('cart', JSON.stringify([]));
  };

  useEffect(() => {
    dispatch(getGlidersFromCart());
    // const ids = localStorage.getItem('cart')
  }, [clearCart]);
  return (
    <div>
      Cart
      <button onClick={clearCart}>Clear cart</button>
      {cart &&
        cart.map(item => {
          return (
            <>
              <Glider
                make={item.make}
                model={item.model}
                price={item.price}
                description={item.description}
                gliderImg={item.gliderImg}
                list={item.list}
              />
              <button onClick={clearCart}>remove from cart</button>
            </>
          );
        })}
    </div>
  );
};
