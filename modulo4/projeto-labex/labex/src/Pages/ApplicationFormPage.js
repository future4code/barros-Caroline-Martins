import React from "react";
import {useNavigate} from "react-router-dom"

function FormUsuario (){
    const navigate=useNavigate();

    const lastPage = () => {
        navigate(-1)
      }
  

    return(
        <>
        <p>FormUsuario</p>
        <h3>Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição</h3>

        <input type= "text"placeholder="Nome:"></input>
        <input type="number" placeholder="Idade:"></input>
        <input placeholder="Email:"></input>
        <button >Inscreva-se</button>
        <button onClick={lastPage}>Voltar</button>

        </>
    )
}


export default FormUsuario;