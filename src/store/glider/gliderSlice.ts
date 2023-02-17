import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { glidersApi } from '../../api/api';
import { GliderType } from '../gliders/glidersSlice';

export const getGlider = createAsyncThunk('glider', async (id: string, thunkAPI) => {
  try {
    return await glidersApi.getGlider(id);
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const createGlider = createAsyncThunk(
  'createGlider',
  async (glider: GliderType, thunkAPI) => {
    try {
      return await glidersApi.createGlider(glider);
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const gliderSlice = createSlice({
  name: 'glider',
  reducers: {
    resetErrorsAC: state => {
      state.errors = '';
    }
  },
  initialState: {
    glider: {} as GliderType,
    isError: false,
    isLoading: false,
    message: '',
    errors: ''
  },
  extraReducers: builder => {
    builder.addCase(getGlider.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getGlider.fulfilled, (state, action: any) => {
      state.isLoading = false;
      state.glider = action.payload[0];
    });
    builder.addCase(getGlider.rejected, (state, action: any) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.glider = {} as GliderType;
    });

    builder.addCase(createGlider.pending, state => {
      state.isLoading = true;
      state.errors = '';
    });
    builder.addCase(createGlider.fulfilled, (state, action: any) => {
      state.isLoading = false;
      state.glider = action.payload;
      state.errors = '';
    });
    builder.addCase(createGlider.rejected, (state, action: any) => {
      state.isLoading = false;
      state.isError = true;
      state.errors = action.payload;
    });
  }
});

export const { resetErrorsAC } = gliderSlice.actions;

export const gliderReducer = gliderSlice.reducer;
