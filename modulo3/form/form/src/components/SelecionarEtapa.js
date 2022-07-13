import React, {useState} from "react";
import Dados from "./Dados"
import EnsinoSuperior from "./EnsinoSuperior";
import Ensino from "./Ensino";
import PagFinal from "./PagFinal";



const SelecionarEtapa=()=>{
    const [logado,setLogado]=useState(false)

    if (logado===false){
        return(
            <Dados estarLogado={setLogado}/>
        )

    }
    else{
        return(
            <Ensino estarLogado={setLogado}/>
        )
    }
    
}
export default SelecionarEtapa;