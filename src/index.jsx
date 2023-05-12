import React from 'react';
import Inicial from './pages/Inicial/Inicial';
import Hospital from './pages/Sistema(Hospital)/Hospital';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Agendamento from './pages/Agendamento/Agendamento';

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
      <Route path='/Cadastro' strict element={<Cadastro />} />
      <Route path='/Agendamento' strict element={<Agendamento />} />

    </Routes> 
  </BrowserRouter>

);

