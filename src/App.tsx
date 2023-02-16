import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage";
import {paths} from "./paths";
import {GliderPage} from "./pages/GliderPage/GliderPage";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path={paths.home} element={<HomePage/>}/>
                  <Route path={`${paths.glider}/:id`} element={<GliderPage/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
