import React from "react";
import {Form} from "./styleEnsino"


const EnsinoSuperior=()=>{


    return(
        <Form>

        <h1>Informações educacionais</h1>

        <label>Qual curso:</label>
        <input type="text "></input>

        <label>Instituição de ensino:</label>
        <input type="text"></input>

        <button>Próxima Etapa</button>
        
        </Form>
    )
}

export default EnsinoSuperior;