import React from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios"


function FormUsuario (){
    //navegação
    const navigate=useNavigate();
    const lastPage = () => {
        navigate(-1)
      }

    // const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/caroline-martins-barros/trips/NoIFVcOiSgTKTIPVZwXS/apply'
    // const candidados=()=>{
    // const body={
    //     "name": "",
    //     "age": Number,
    //     "applicationText": "",
    //     "profession": "",
    //     "country": ""
    // }
    //     axios.post(url, body)
    //     .then((response)=>{url, body, console.log(`resposta ${response.data.trip}`)})
    //     .catch((erro)=>console.log(erro))}
        
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