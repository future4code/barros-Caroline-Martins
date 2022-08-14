import React from "react";
import {useNavigate} from "react-router-dom"
import useRequestData from "../hooks/useRequestData";
import {BASE_URL} from "../constants/constants"
import {Card, Header,Main} from "./styleds/ListTripsStyled"



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
                <h3>{i.name}</h3>
                <h4>{i.description}</h4>
                <p>{i.planet}</p>
                <p>{i.durationInDays}</p>
                <p>{i.date}</p>
            </div>
        </Card>
        )
    })
    

    return(
        <Main>
            <Header>
                
        <p>ListaViagens</p>
        <h3>Para vermos todas as viagens</h3>

        <div>
            <button onClick={tripListViagem}>Inscreva-se</button>
            <button onClick={lastPage}>Voltar</button>
        </div>
            </Header>


        
        {isLoadingTrip && <h3>...CARREGANDO...</h3>}
        {!isLoadingTrip && cards}
        {!isLoadingTrip && !cards && erroTrip}
      


        </Main>
    )
}

export default ListaViagens;