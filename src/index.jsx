import React from 'react';
import Inicial from './pages/Inicial/Inicial';
import Hospital from './pages/Sistema(Hospital)/Hospital';
import Login from './pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM  from 'react-dom/client';
import Duvidas from './pages/Duvidas/Duvidas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path='/' strict element={<Inicial />} />
      <Route path='/Login' strict element={<Login />} />
      <Route path='/Hospital' strict element={<Hospital />} />
      <Route path='/Duvidas' strict element={<Duvidas />} />
    </Routes> 
  </BrowserRouter>

);

