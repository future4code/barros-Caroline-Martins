import React, {useState, useEffect} from "react";
import axios from "axios"
import { HeaderMatchs,IconPag, MainMatchs,Imagem, Strong, AntesCenter } from "./styledMatch"
import MudaPag from "./imagens/coneccao.png"
import ImagemHearder from "./imagens/headerSemFundo.png"
import { Center } from "./styled";
//pagina Matchs curtidos 
function Match (props){
    
    const [match, setMatch] = useState ([])
    const [open, setOpen]= useState(false)

    //para excluir os matchs
    const handleOpen=()=>{setOpen(true)}
    // console.log(handleOpen)

    //´para nao confirmar as exclucoes
    const handleClick=()=>{setOpen(false)}
    // console.log(handleClick)

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
    <MainMatchs>
            <HeaderMatchs>
                <img src={ImagemHearder} />
                <div>
                <IconPag src={MudaPag} onClick={props.matchCard} alt="icone match" ></IconPag>
                <button   onClick={clear}>Limpar Match</button>
                </div>
            </HeaderMatchs>
        

        <AntesCenter>
            {match.map((item) =>{
                return( 
            <Center>
                <Imagem src={item.photo}/>
                <Strong>{item.name}</Strong>
            </Center> 
            ) })}
        </AntesCenter>
       

        
    </MainMatchs>
    )

}

export default Match;