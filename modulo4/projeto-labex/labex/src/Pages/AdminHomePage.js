import React,{useState, useEffect}from "react";
import {useNavigate} from "react-router-dom"
import { useProtectPage } from "../hooks/useProtectPage";
import {Main} from "./styleds/AdmControlStyled"
import useRequestData from "../hooks/useRequestData";
import {BASE_URL} from "../constants/constants"
import ListaViagens from "./ListTripsPage";
import axios from "axios";


function ControlAdm (){
    //navegação
    useProtectPage();
    const navigate = useNavigate();
    const newViagens =()=>{
        navigate("/admin/trips/create")
    }
    const listViagens=(id)=>{
        navigate(`/admin/trips/list${id}`)
    }
    const lastPage = () => {
        navigate(-1)
      }
    const logout=()=>{
        localStorage.removeItem("token")
        navigate(-1)
    }
    const [dataTrip] = useRequestData(`${BASE_URL}trips`)

    const [trip, setTrip]=useState()

    const Deletar=(id)=>{
        axios.delete(`${BASE_URL}trips/${id}`,{
            headers:{
                auth:localStorage.getItem("token")
            }
        }).then((response)=>{
            setTrip()
        }).catch((erro) => { console.log(erro.data) })
    }
    useEffect(()=>{Deletar()},[trip])

    const cards = dataTrip && dataTrip.map((i) => {
    
        return (
            <div>
                <div >
                    <h3>{i.name}</h3>
                    <button onClick={()=>{listViagens(i.id)}}>Detalhes</button>
                    <button onClick={()=>{Deletar(i.id)}}>Deletar</button>
                </div>
            </div>
        )
    })



    return(
        <Main>
        <h1>Controle Administrativo</h1>
        <form></form>
        <button onClick={lastPage}>Voltar</button>
        <button onClick={logout}>Logout</button>
        <button onClick={newViagens}>Criar Viagens</button>
        <button onClick={listViagens}>Viagens existentes</button>
        <button >Deletar Viagens</button>
        {cards}
        </Main>
    )
}


export  default ControlAdm;