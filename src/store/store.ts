import { combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { glidersReducer } from './gliders/glidersSlice';
import thunkMiddleware from 'redux-thunk';
import { gliderReducer } from './glider/gliderSlice';
import { cartReducer } from './cart/cartSlice';

export const rootReducer = combineReducers({
  gliders: glidersReducer,
  glider: gliderReducer,
  cart: cartReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).prepend(thunkMiddleware)
});

export type RootReducerType = typeof rootReducer;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, any>;

export type AppRootStateType = ReturnType<RootReducerType>;
