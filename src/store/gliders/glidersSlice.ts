import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {glidersApi} from "../../api/api";

export const getGliders = createAsyncThunk('gliders',
    async (_, thunkAPI)=>{
    try {
        return await glidersApi.getGliders().json()
    } catch (e) {
        // @ts-ignore
        return thunkAPI.rejectWithValue(e.response.data)
    }
})


const glidersSlice = createSlice({
    name: 'gliders',
    reducers: {},
    initialState: {
        gliders: [],
        isError: false,
        isLoading: false,
        message: ''
    },
    extraReducers: (builder) => {
        builder.addCase(getGliders.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(getGliders.fulfilled, (state, action) => {
            state.isLoading = false
            // @ts-ignore
            state.gliders = action.payload
        });
        builder.addCase(getGliders.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            // @ts-ignore
            state.message = action.payload.message;
            state.gliders = []
        })
    }
})

export const glidersReducer = glidersSlice.reducer

export type GliderType = {
    _id: string
    name: string
    price: number
    description: string
    range: number
    gliderImg: string
    __v?: number
}