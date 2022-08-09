import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./HomePages"
import ControlAdm from "./AdminHomePage"
import  LoginAdm from "./LoginPage"
import FormUsuario from "./ApplicationFormPage"
import FormAdm from "./CreateTripPage"
import DetailsAdm from "./TripDetailsPage"
import ListaViagens from "./ListTripsPage";


function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/trips/list" element={<ListaViagens/>}/>
                <Route path="/login" element={<LoginAdm/>}/>
                <Route path="/trips/aplicacao" element={<FormUsuario/>}/>
                <Route path="/login/adm" element={<ControlAdm/>}/>
                <Route path="/criar" element={<FormAdm/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}

export default Router;