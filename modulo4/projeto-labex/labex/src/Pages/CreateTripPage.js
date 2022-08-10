import React from "react";
import {useNavigate} from "react-router-dom"


function FormAdm(){
    const navigate=useNavigate();

    const lastPage = () => {
        navigate(-1)
      }
    return(
        <>
        <p>FormAdm</p>
        <h3> Formulário para o administrador criar uma nova viagem</h3>

        
        <button>Criar</button>
        <button onClick={lastPage}>Voltar</button>
        </>
    )

}


export default FormAdm