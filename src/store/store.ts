import {configureStore} from "@reduxjs/toolkit";
import {gliderReducer} from "../gliders/glidersSlice";

export const store = configureStore({
    reducer: {
        gliders: gliderReducer
    },
})