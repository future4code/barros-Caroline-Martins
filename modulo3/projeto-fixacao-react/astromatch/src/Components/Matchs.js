import React,{useEffect, useState} from "react";
import axios from "axios";
import{Header, ConteinerBotao} from "./styled"

function Match (props){
    const [match, setMatch] = useState ([])
    const [open, setOpen]= useState(false)

    //para excluir os matchs
    const handleOpen=()=>{setOpen(true)}

    //´para nao confirmar as exclucoes
    const handleClick=()=>{setOpen(false)}

    //GET 
    const getMatches=()=>{
        axios.get`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline/matches`
        .then((response) =>{setMatch(response.data.matches)})
        .catch((erro)=>{console.log(erro)})
    }

    useEffect(()=>{getMatches()},[])


    //GET PARA EXCLUIR 
    const clear=()=>{
        axios.put`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline/clear`
        .then((response)=>{getMatches(); handleClick(); console.log(response) })
        .catch((erro)=>{alert ("Ouve um problema") 
        console.log(erro)})
    }




    return(
        <>
        
        <Header>
            
            <h1>ASTROMATCH</h1>
            <button onClick={props.matchCard}>BOTAO MUDA PAGINA</button>

        </Header>
       
        <div>
    {/* era para estar renderizando os matchs mas não funciona */}
            {match.map((item) =>{
                return( 
            <div><img src={item.photo}/>
            
            <strong>{item.name}</strong>
            </div> 
            ) })}

        </div>
        
        <ConteinerBotao>
            <div>
              <button onClick={handleOpen}>Limpar matches</button>
            </div>
      
            <div>
             <button onClick={handleClick} >Não confirmo!</button>
             <button   onClick={clear}>Confirmo!</button>
            </div>

        </ConteinerBotao>
        
        
    </>
    )

        
    
}
export default Match;