import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { glidersApi } from '../../api/api';

export const getGliders = createAsyncThunk<GliderType[], undefined, { rejectValue: any }>(
  'gliders',
  async (_, thunkAPI) => {
    try {
      return (await glidersApi.getGliders()) as GliderType[];
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const glidersSlice = createSlice({
  name: 'gliders',
  reducers: {},
  initialState: {
    gliders: [] as GliderType[],
    isError: false,
    isLoading: false,
    message: ''
  } as InitialStateType,
  extraReducers: builder => {
    builder.addCase(getGliders.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getGliders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.gliders = action.payload;
    });
    builder.addCase(getGliders.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.gliders = [];
    });
  }
});

export const glidersReducer = glidersSlice.reducer;

export type GliderType = {
  _id?: string;
  make: string;
  model: string;
  price: number;
  description: string;
  gliderImg: string;
  count: number;
  //Tech data
  list: {
    fullDescription: string;
    glideRatio: string;
    motor: string;
    seats: number;
    fuselageLength: number;
    maxSpeed: number;
    emptyMass: number;
    maxTakeOfMass: number;
    year: number;
    oxygen: string;
    trailer: string;
    engine: string;
  };

  __v?: number;
};

export type InitialStateType = {
  gliders: GliderType[];
  isError: boolean;
  isLoading: boolean;
  message: string;
};
