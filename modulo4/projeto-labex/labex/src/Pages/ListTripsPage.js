import React from "react";
import {useNavigate} from "react-router-dom"


function ListaViagens (){
    const navigate = useNavigate();


    const tripListViagem = () => {
        navigate("/trips/aplicacao")
    }
    const lastPage = () => {
        navigate(-1)
    }

    

    return(
        <>
        <p>ListaViagens</p>
        <h3>Para vermos todas as viagens</h3>


        <button onClick={tripListViagem}>Inscreva-se</button>

        <button onClick={lastPage}>Voltar</button>
        </>
    )
}

export default ListaViagens;