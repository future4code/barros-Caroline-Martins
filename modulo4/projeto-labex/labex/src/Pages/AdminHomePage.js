import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useProtectPage } from "../hooks/useProtectPage";
import { Main } from "./styleds/AdmControlStyled"
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/constants"
import axios from "axios";


function ControlAdm() {
    //navegação
    useProtectPage();
    const navigate = useNavigate();
    const newViagens = () => {
        navigate("/admin/trips/create")
    }
    const listViagens = (id) => {
        navigate(`/admin/trips/list${id}`)
    }
    const lastPage = () => {
        navigate(-1)
    }
    const logout = () => {
        localStorage.removeItem("token")
        navigate(-1)
    }
    const [dataTrip, isLoading, erro, page, setPage] = useRequestData(`${BASE_URL}trips`)
    
    const Deletar = (id) => {
        axios.delete(`${BASE_URL}trips/${id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then((response) => {
            setPage(!page);alert("Viagem deletada com Sucesso!!")
        }).catch((erro) => { 
            console.log(erro) })}


    const cards = dataTrip && dataTrip.map((i) => {

        return (
            <div>
                <div >
                    <h2>{i.name}</h2>
                    <h4>{i.planet}</h4>
                    <button onClick={() => { listViagens(i.id) }}>Detalhes</button>
                    <button onClick={() => { Deletar(i.id) }}>Deletar</button>
                </div>
            </div>
        )
    })

    return (
        <Main>
            <h1>Controle Administrativo</h1>
            <form></form>
            <button onClick={lastPage}>Voltar</button>
            <button onClick={newViagens}>Criar Viagens</button>
            <button onClick={logout}>Logout</button>
            {cards}
        </Main>
    )
}


export default ControlAdm;