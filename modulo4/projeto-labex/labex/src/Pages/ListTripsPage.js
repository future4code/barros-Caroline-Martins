import React from "react";
import {useNavigate} from "react-router-dom"
import useRequestData from "../hooks/useRequestData";
import {BASE_URL} from "../constants/constants"



function ListaViagens (){

    //navegação
    const navigate = useNavigate();
    const tripListViagem = () => {
        navigate("/trips/aplicacao")
    }
    const lastPage = () => {
        navigate(-1)
    }


    const [dataTrip, isLoadingTrip, erroTrip]=  useRequestData(`${BASE_URL}trips`)

    const cards = dataTrip && dataTrip.map((i)=>{
    return(
        <>
        <p>{i.name}</p>
        <p>{i.description}</p>
        <p>{i.planet}</p>
        <p>{i.durationInDays}</p>
        <p>{i.date}</p>
        </>
        )
    })
    

    return(
        <>
        <p>ListaViagens</p>
        <h3>Para vermos todas as viagens</h3>


        <button onClick={tripListViagem}>Inscreva-se</button>

        <button onClick={lastPage}>Voltar</button>

        <div>
        {isLoadingTrip && <h3>...CARREGANDO...</h3>}
        {!isLoadingTrip && cards}
        {!isLoadingTrip && !cards && erroTrip}
        </div>

        </>
    )
}

export default ListaViagens;