import React from "react";
import Inicial from './pages/Inicial'; 
import Login from './pages/Login';
import Hospital from './pages/Sistema(Hospital)';
import Duvidas from './pages/Duvidas';
import Cadastro from './pages/Cadastro';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export const App = () => {
    
    return(

        <BrowserRouter>
            <Routes>

                <Route path ='/' exact element={<Inicial />} />
                <Route path ='/Login' exact element={<Login />} />
                <Route path ='/Hospital' exact element={<Login />} />
                <Route path ='/Duvidas' exact element={<Duvidas />} />

            </Routes>
        </BrowserRouter>

    );

}
