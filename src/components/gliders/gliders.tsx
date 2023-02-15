import React from 'react';
import {getGliders} from "../../gliders/glidersSlice";

export const Gliders = () => {
    const getGlider = () => {
        getGliders()
    }
    return (
        <div>
            <h1>Gliders</h1>
            <button onClick={getGlider}>GET</button>
        </div>
    );
};
