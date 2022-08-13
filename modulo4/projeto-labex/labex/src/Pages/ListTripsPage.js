import React from "react";
import {useNavigate} from "react-router-dom"
import useRequestData from "../hooks/useRequestData";
import {BASE_URL} from "../constants/constants"
import {Card} from "./styleds/ListTripsStyled"


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
        <Card>
            <div>
                <p>{i.name}</p>
                <p>{i.description}</p>
                <p>{i.planet}</p>
                <p>{i.durationInDays}</p>
                <p>{i.date}</p>
            </div>
        </Card>
        )
    })
    

    return(
        <main>
        <p>ListaViagens</p>
        <h3>Para vermos todas as viagens</h3>


        <section>
        {isLoadingTrip && <h3>...CARREGANDO...</h3>}
        {!isLoadingTrip && cards}
        {!isLoadingTrip && !cards && erroTrip}
        </section>


        <div>
            <button onClick={tripListViagem}>Inscreva-se</button>
            <button onClick={lastPage}>Voltar</button>
        </div>

        </main>
    )
}

export default ListaViagens;