import {createSlice} from "@reduxjs/toolkit";



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