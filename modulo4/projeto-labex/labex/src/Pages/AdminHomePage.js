import React from "react";
import {useNavigate} from "react-router-dom"


function ControlAdm (){
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
    return(
        <>
        <p>ControlAdm</p>
        <h3>Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</h3>


        <button onClick={newViagens}>Criar Viagens</button>
        <button onClick={listViagens}>Viagens existentes</button>
        <button >Deletar Viagens</button>
        <button onClick={lastPage}>Voltar</button>
        </>
    )
}


export  default ControlAdm;