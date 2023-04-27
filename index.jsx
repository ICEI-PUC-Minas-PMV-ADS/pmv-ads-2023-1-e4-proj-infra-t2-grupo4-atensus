import React from 'react';
import Inicial from './pages/Inicial/Inicial';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM  from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path='/' strict element={<Inicial />} />
    </Routes> 
  </BrowserRouter>

);

