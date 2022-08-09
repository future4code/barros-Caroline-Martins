import React from "react";
import {useNavigate} from "react-router-dom"
function DetailsAdm(){
    const navigate = useNavigate();

    return(
        <>
        <p>DetailsAdm</p>
        <h3>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</h3>
        </>
    )


}


export default DetailsAdm;