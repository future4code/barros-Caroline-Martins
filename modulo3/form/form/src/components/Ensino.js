import React from "react";
import PagFinal from "./PagFinal";
import {Form} from "./styleEnsino"



const Ensino=()=>{

    

    return(
        <Form>
        <label>Por que você não terminou ou não fez uma graduação?</label>
        <input type="text"></input>

        <div>
        <label>Tem algum curso complementar?</label>

            <select>
                <option>Curso técnico</option>
                <option>Cursos de linguagens</option>
                <option>Não fiz curso complementar</option>
            </select>
        </div>
            <button>Próxima Etapa</button>
        </Form>
    )
}




export default Ensino;