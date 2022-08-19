import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom"
import { BASE_URL } from "../constants/constants";
import { useProtectPage } from "../hooks/useProtectPage";


function DetailsAdm(){
    useProtectPage();
    const navigate = useNavigate();
    const lastPage = () => {
        navigate(-1)
      }
    const [trip, setTrip]=useState({})
   
    const parametro=useParams()
    console.log(parametro)
    const getTripDetail=()=>{
        axios.get(`${BASE_URL}trip/${parametro.id}`,{
            headers:{
                auth:localStorage.getItem("token")
            }
        }).then((response)=>{
            setTrip(response.data.trip)
            console.log(response.data.trip)
        }).catch((erro) => { console.log(erro.data) })
    }
    useEffect(()=>{getTripDetail()},[])

    const candidatos = trip.candidates && trip.candidates.map((i) => {
        return (
            <div>
                <div >
                    <h3>Candidados</h3>
                    <p>{i.name}</p>
                    <p>{i.profession}</p>
                    <p>{i.applicationText}</p>
                    <p>{i.age}</p>
                </div>
            </div>
        )
    })
    console.log(candidatos)
    return(
        <>
        <p>DetailsAdm</p>
        <h3>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</h3>
        <div>
            <p>{trip.planet}</p>
            <p>{trip.name}</p>
            <p>{trip.date}</p>
            <p>{trip.description}</p>
        </div>
       
       {candidatos}
        
        <button onClick={lastPage}>Voltar</button>
        </>
    )


}


export default DetailsAdm;