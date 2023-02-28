import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { glidersApi } from '../../api/api';
import { GliderType, InitialStateType } from '../gliders/glidersSlice';

export const getGlidersFromCart = createAsyncThunk('cart', async (_, thunkAPI) => {
  try {
    const ids = JSON.parse(localStorage.getItem('cart') || '').join(',');
    if (ids.length) {
      console.log(ids);
      return await glidersApi.getGlidersFromCart(ids);
    } else {
      thunkAPI.dispatch(setDefault);
    }
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const cartSlice = createSlice({
  name: 'cart',
  reducers: {
    setDefault: (state, action) => {
      state.gliders = [];
    }
  },
  initialState: {
    gliders: [] as GliderType[],
    isError: false,
    isLoading: false,
    message: ''
  } as InitialStateType,
  extraReducers: builder => {
    builder.addCase(getGlidersFromCart.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getGlidersFromCart.fulfilled, (state, action: any) => {
      state.isLoading = false;
      state.gliders = action.payload;
      console.log(state.gliders);
    });
    builder.addCase(getGlidersFromCart.rejected, (state, action: any) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.gliders = [];
    });
  }
});

export const { setDefault } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
