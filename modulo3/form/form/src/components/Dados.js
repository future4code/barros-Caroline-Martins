import React from "react";
import {Inicio,} from "./styleDados"


const Dados=()=>{





    return(

        <Inicio>
            <form>


                <h1>Dados gerais</h1>

                <label>Nome:</label>
                <input type="text "></input>

                <label>Idade:</label>
                <input type="number"></input>

                <label>Email:</label>
                <input type="text"></input>

                <div>
                    <label>Nivel escolaridade:</label>

                    <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                    </select>
                </div>

                <button>Próxima Etapa</button>
                
            </form>

        </Inicio>
    )
}

export default Dados;