import React, {useState, useEffect} from "react";
import axios from "axios";
import {CenterGrid, Center, Header, Icon, Descript, MainGrid, NameAge, Bio, Imagem, IconPag, TextFinal ,Final} from "./styled"
import ImagemHearder from "./imagens/headerSemFundo.png"
import MudaPag from "./imagens/coneccao.png"
import CoracaoVermelho from "./imagens/coracao.png"
import Xis from "./imagens/x.png"

//pagina Inicial para curtir 
function Card(props){
    const [usuario,setUsuario]=useState([])

    //GET retorna perfil não visto
    const getProfile=()=>{
        axios.get`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline/person`
        .then((response)=>{setUsuario(response.data.profile); console.log(response)})
        .catch((erro)=>{console.log(erro)})
    }

    useEffect(()=>{getProfile()},[])


   
    const url="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline/choose-person"
   
    //POST CURTIU
    const choose=(id, escolha)=>{
    const body={
        "id": id,
        "choice":escolha
    }
        axios.post(url, body)
        .then((response)=>{getProfile(); console.log(`resposta ${response.data}`)})
        .catch((erro)=>console.log(erro))

    }
   
     //GET PARA EXCLUIR 
     const clear=()=>{
      axios.put`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline/clear`
      .then((response)=>{getProfile(); console.log(response) })
      .catch((erro)=>{alert ("Ouve um problema") 
      console.log(erro)})
  }

    return(
        
    <MainGrid>
        

    <CenterGrid>      
      <Header>
        
        <img src={ImagemHearder} />
        <div>
        <IconPag src={MudaPag} onClick={props.CardMatch} alt="icone match" ></IconPag>
        </div>
      </Header>
      {usuario?
      <Center>
        <Imagem src={usuario.photo} alt="Photo pretendente"/>   
          <Descript>            
            <NameAge>{usuario.name}, {usuario.age}</NameAge>            
            <Bio>{usuario.bio}</Bio>
          </Descript>
      </Center>
      :
        <TextFinal>
          <h3>Chegou ao final dos candidados</h3>
          <h4>Para Retornar só clicar</h4>
        </TextFinal>
      }
      {usuario?
      <footer>
        <Icon>
            <img src={Xis} onClick = {( ()  => choose(usuario.id,false) )}  alt="icone xis"></img>
            <img src={CoracaoVermelho} onClick = {( ()  => choose(usuario.id,true))} alt="icone coracao"></img>
        </Icon>    
      </footer>
      :
      <div>
        
      <Final>
        <button   onClick={clear}>AQUI!</button>
      </Final>

      </div>
      }

    </CenterGrid>

    
  </MainGrid>




    )
}

export default Card;