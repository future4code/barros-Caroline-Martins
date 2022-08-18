import React from "react";
import {useNavigate} from "react-router-dom"
import { useProtectPage } from "../hooks/useProtectPage";


function DetailsAdm(){
    useProtectPage();
    const navigate = useNavigate();
    const lastPage = () => {
        navigate(-1)
      }
    return(
        <>
        <p>DetailsAdm</p>
        <h3>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</h3>

        <button onClick={lastPage}>Voltar</button>
        </>
    )


}


export default DetailsAdm;