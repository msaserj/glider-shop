import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NewGlider = () => {
   const navigate = useNavigate();
   return (
      <div>
         <button onClick={() => {}}>{'<-- Go back'}</button>
         New Glider
      </div>
   );
};