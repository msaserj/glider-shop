import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {glidersApi} from "../../api/api";

export const getGlider = createAsyncThunk('glider',
    async (id: string, thunkAPI)=>{
        try {
            return await glidersApi.getGlider(id).json()
        } catch (e: any) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })


const gliderSlice = createSlice({
    name: 'glider',
    reducers: {},
    initialState: {
        glider: {} as GliderType,
        isError: false,
        isLoading: false,
        message: ''
    },
    extraReducers: (builder) => {
        builder.addCase(getGlider.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(getGlider.fulfilled, (state, action) => {
            state.isLoading = false
            // @ts-ignore
            state.glider = action.payload[0]
        });
        builder.addCase(getGlider.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            // @ts-ignore
            state.message = action.payload.message;
            state.glider = {} as GliderType
        })
    }
})

export const gliderReducer = gliderSlice.reducer

export type GliderType = {
    _id: string
    name: string
    price: number
    description: string
    range: number
    gliderImg: string
    __v?: number
}