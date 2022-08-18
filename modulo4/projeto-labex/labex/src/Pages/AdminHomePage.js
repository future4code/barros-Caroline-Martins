import React from "react";
import {useNavigate} from "react-router-dom"
import { useProtectPage } from "../hooks/useProtectPage";
import {Main} from "./styleds/AdmControlStyled"


function ControlAdm (){
    //navegação
    useProtectPage();
    const navigate = useNavigate();
    const newViagens =()=>{
        navigate("/admin/trips/create")
    }
    const listViagens=()=>{
        navigate("/admin/trips/list")
    }
    const lastPage = () => {
        navigate(-1)
      }


    const logout=()=>{
        localStorage.removeItem("token")
        navigate(-1)
    }
    return(
        <Main>
        <h1>Controle Administrativo</h1>
        <form></form>
        <button onClick={lastPage}>Voltar</button>
        <button onClick={logout}>Logout</button>
        <button onClick={newViagens}>Criar Viagens</button>
        <button onClick={listViagens}>Viagens existentes</button>
        <button >Deletar Viagens</button>
        </Main>
    )
}


export  default ControlAdm;