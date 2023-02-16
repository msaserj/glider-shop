import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { paths } from './paths';
import { GliderPage } from './pages/GliderPage/GliderPage';
import { Header } from './components/Header/Header';
import { NewGlider } from './components/NewGlider/NewGlider';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path={paths.home} element={<HomePage />} />
          <Route path={`${paths.glider}/:id`} element={<GliderPage />} />
          <Route path={paths.createGlider} element={<NewGlider />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
