import React from "react";
import {useNavigate, useParams} from "react-router-dom"
import {Main, Conteiner} from "./styleds/HomeStyled"

function Home (){
    const navigate = useNavigate();
    
    const tripList = () => {
        navigate("/trips/list")
      }
    const tripAdm = () => {
        navigate("/login")
      }
    
    return(
      <Main>
        <Conteiner>

        <h3>Home </h3>
        <h3>Para o usuário escolher entre Área Administrativa e Lista de Viagens</h3>
        <button onClick={tripList}>Lista de Viagens</button>

        <button onClick={tripAdm}>Area Administrativa</button>
        
        </Conteiner>
        


      </Main>
)}

export default Home;