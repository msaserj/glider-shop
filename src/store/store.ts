import {combineReducers, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {gliderReducer} from "../gliders/glidersSlice";
import thunkMiddleware from 'redux-thunk'

export const rootReducer = combineReducers({
    gliders: gliderReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
});



export type RootReducerType = typeof rootReducer

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, any>

export type AppRootStateType = ReturnType<RootReducerType>

// @ts-ignore
window.store = store