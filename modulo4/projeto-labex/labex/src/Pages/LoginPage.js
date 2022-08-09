import React from "react";
import {useNavigate} from "react-router-dom"

function LoginAdm (){
    const navigate = useNavigate();

    const login = () => {
        navigate("/login/adm")
      }

    const lastPage = () => {
        navigate(-1)
      }
    return(

        <>
        <p>LoginAdm</p>
        <h3>Para fazermos login como administrador</h3>

        <input type = "text" placeholder="Email..."></input>
        <input placeholder="Senha..."></input>

        <button onClick={login}>Entrar</button>

        <button onClick={lastPage}>Voltar</button>
        </>
    )
}

export default LoginAdm;