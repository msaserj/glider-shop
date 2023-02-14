import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage";
import {paths} from "./paths";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <h1>Glider Shop</h1>
              <Routes>
                  <Route path={paths.home} element={<HomePage/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
