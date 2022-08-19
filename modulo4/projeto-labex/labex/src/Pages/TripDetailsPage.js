import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { BASE_URL } from "../constants/constants";
import { useProtectPage } from "../hooks/useProtectPage";


function DetailsAdm() {
    //protecao de paginas
    useProtectPage();
    //navegacao
    const navigate = useNavigate();
    const lastPage = () => {
        navigate(-1)
    }
    //Essa requisição retorna os detalhes e os candidatos de uma viagem específica.
    const [trip, setTrip] = useState({})

    const parametro = useParams()
    // console.log(parametro)
    const getTripDetail = () => {
        axios.get(`${BASE_URL}trip/${parametro.id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then((response) => {
            setTrip(response.data.trip)
            // console.log(response.data.trip)
        }).catch((erro) => { console.log(erro.data) })
    }
    useEffect(() => { getTripDetail() }, [])

    const aprovado = (id) => {
        const body = {
            approve: true
        }
        axios.put(`${BASE_URL}trips/${parametro.id}/candidates/${id}/decide`, body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }.then((response)=>{alert("Candidato Aprovado!");console.log(response.data.trip)}
        ).catch((erro)=>{alert("Ouve um problema!");console.log(erro)}))
    }
    
    const reprovado = (candidatesId) => {
        const body = {
            approve: false
        }
        axios.put(`${BASE_URL}trips/${parametro.id}/candidates/${candidatesId}/decide`, body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }.then((response)=>{alert("Candidato reprovado!");console.log(response.data.trip)}
        ).catch((erro)=>{alert("Ouve um problema!");console.log(erro)}))
    }

    //map para ver candidatos as viagens
    const candidatos = trip.candidates && trip.candidates.map((i) => {
        return (
            <div>
                <div >
                    <h3>Candidados</h3>
                    <p>Nome:{i.name}</p>
                    <p>Profissão:{i.profession}</p>
                    <p>Candidatura:{i.applicationText}</p>
                    <p>idade:{i.age}</p>
                    <button onClick={() => aprovado(i.id, i.name)}>Aprovar</button>
                    <button onClick={() => reprovado(i.id, i.name)}>Reprovar</button>
                </div>
            </div>
        )
    })


    return (
        <>
            <p>DetailsAdm</p>
            <h3>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</h3>
            <div>
                <p>Planeta: {trip.planet}</p>
                <p>Nome:  {trip.name}</p>
                <p>Data:  {trip.date}</p>
                <p>Descrição viagem:  {trip.description}</p>
            </div>

            {candidatos}
           
            <button onClick={lastPage}>Voltar</button>
        </>
    )


}


export default DetailsAdm;