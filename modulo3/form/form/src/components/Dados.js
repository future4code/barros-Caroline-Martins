import React, { useState } from "react";
import {Inicio,} from "./styleDados"
import Ensino from "./Ensino";
import EnsinoSuperior from "./EnsinoSuperior";
import PagFinal from "./PagFinal";


const Dados=(props)=>{

    const [selecao,setSelecao]= useState(null)

    const fazerLogin=(event)=>{
        event.preventDefault();
        props.estarLogado(true)
    }
     let ensino;
  switch(selecao){
      case "incompleto":
         <Ensino/>
          break;
      case "completo":
             <EnsinoSuperior/>
              break;
      case "medio":
          ensino= <PagFinal/>
          break;
      
  }
    

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
                    <option >Ensino médio incompleto</option>
                    <option >Ensino médio completo</option>
                    <option onClick={()=>setSelecao("incompleto")}>Ensino superior incompleto</option> 
                    <option onClick={()=>setSelecao("completo")}>Ensino superior completo</option>
                    </select>
                </div>
                <button onClick={PagFinal}>Próxima Etapa</button>
                
            </form>

        </Inicio>
    )
}

export default Dados;