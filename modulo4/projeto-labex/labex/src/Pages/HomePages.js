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
        <div>

        <h3>BEM-VIND@S</h3>
        <h3>Ao LabeX </h3>
        <h4>venha ter uma experiência de outro Planeta!</h4>
      
        <button onClick={tripList}>Lista de Viagens</button>

        <button onClick={tripAdm}>Administrativo</button>
        </div>

        </Conteiner>
        


      </Main>
)}

export default Home;