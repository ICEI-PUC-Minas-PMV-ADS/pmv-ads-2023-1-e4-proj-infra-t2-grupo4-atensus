import React from "react";
import Inicial from './pages/Inicial/Inicial'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
    
    return(

        <BrowserRouter>
            <Routes>

                <Route path ='/' exact element={<Inicial />} />

            </Routes>
        </BrowserRouter>

    );

}