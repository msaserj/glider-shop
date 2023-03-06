import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { glidersApi } from '../../api/api';
import { GliderType, InitialStateType } from '../gliders/glidersSlice';

export const getGlidersFromCart = createAsyncThunk('cart', async (_, thunkAPI) => {
  try {
    const item = JSON.parse(localStorage.getItem('cart') || '');
    const ids = item
      .map((el: { id: string }) => {
        return el.id;
      })
      .join(',');
    if (ids.length) {
      console.log(ids);
      const items = await glidersApi.getGlidersCart(ids);
      items.map((el: { count: number }, index: number) => (el.count = item[index].count));
      return items;
    } else {
      thunkAPI.dispatch(setDefault);
    }
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    gliders: [] as GliderType[],
    isError: false,
    isLoading: false,
    message: ''
  } as InitialStateType,
  reducers: {
    setDefault: state => {
      localStorage.setItem('cart', JSON.stringify([]));
      state.gliders = [];
    },
    setCountItem: (state, action: PayloadAction<{ _id: string }>) => {
      let allGoods: any = [];
      if (localStorage.getItem('cart')) {
        allGoods = JSON.parse(localStorage.getItem('cart') || '');
      }
      const id = action.payload._id;
      if (allGoods.find((el: { id: string | undefined }) => el.id === id) === undefined) {
        allGoods.push({ id: id, count: 1 });
        localStorage.setItem('cart', JSON.stringify(allGoods));
      } else {
        const index = allGoods.findIndex((el: { id: string | undefined }) => el.id === id);
        allGoods[index] = { id: id, count: allGoods[index].count + 1 };
        localStorage.setItem('cart', JSON.stringify(allGoods));
      }
    },
    decreaseCountItem: (state, action: PayloadAction<{ _id: string }>) => {
      let allGoods: any = [];
      if (localStorage.getItem('cart')) {
        allGoods = JSON.parse(localStorage.getItem('cart') || '');
      }
      const id = action.payload._id;
      const index = allGoods.findIndex((el: { id: string | undefined }) => el.id === id);
      allGoods[index] = { id: id, count: allGoods[index].count - 1 };
      localStorage.setItem('cart', JSON.stringify(allGoods));
      state.gliders[index].count -= 1;
    }
  },
  extraReducers: builder => {
    builder.addCase(getGlidersFromCart.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getGlidersFromCart.fulfilled, (state, action: any) => {
      state.isLoading = false;
      state.gliders = action.payload;
    });
    builder.addCase(getGlidersFromCart.rejected, (state, action: any) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.gliders = [];
    });
  }
});

export const { setDefault, decreaseCountItem, setCountItem } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
