import React from "react";
import {Form} from "./styleEnsino"
import PagFinal from "./PagFinal";


const EnsinoSuperior=()=>{


    return(
        <Form>

        <h1>Informações educacionais</h1>

        <label>Qual curso:</label>
        <input type="text "></input>

        <label>Instituição de ensino:</label>
        <input type="text"></input>

        <button onClick={PagFinal}>Próxima Etapa</button>
        
        </Form>
    )
}

export default EnsinoSuperior;