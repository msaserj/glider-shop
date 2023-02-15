import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {glidersApi} from "../api/api";


export const getGliders = createAsyncThunk('gliders',
    async (_, thunkAPI)=>{
    try {
        const gliders = await glidersApi.getGliders().json()
        console.log(gliders)
    } catch (e) {
        // @ts-ignore
        return thunkAPI.rejectWithValue(e.response.data)
    }
})


const glidersSlice = createSlice({
    name: 'gliders',
    initialState: {
        gliders: null,
        isError: false,
        isLoading: false,
        message: ''
    },
    reducers: {}
})

export const gliderReducer = glidersSlice.reducer