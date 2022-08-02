import React, {useState, useEffect} from "react";
import axios from "axios";
import {CenterGrid, Center, Header, Icon, Descript, MainGrid, NameAge, Bio, Imagem} from "./styled"


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


    //POST NÃO CURTIU
    //usei id que esta na documentação com ele funcionou sem estava dando erro
    const bodyOk={
        "id": "71gMbZs2txS9LDvGK5Ew",
        "choise": true
        }
    const url="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caroline/choose-person"
    const choose=()=>{
        axios.post(url, bodyOk)
        .then((response)=>{getProfile(); console.log(response)})
        .catch((erro)=>{alert ("Ouve um erro"); console.log(erro)})

    }


    //POST CURTIU
    const body={
        "id": "71gMbZs2txS9LDvGK5Ew",
        "choise":false
    }
    const chooseFalse=()=>
        axios.post(url, body)
        .then((response)=>{getProfile(); console.log(response)})
        .catch((erro)=>console.log(erro))



    return(
        
    <MainGrid>
        

    <CenterGrid>      
      <Header>
        
        <h1>ASTROMATCH</h1>
        <div> <button onClick={props.CardMatch}>BOTAO muda pagina</button></div>      
      </Header>
      
      <Center>
        <Imagem src={usuario.photo} alt="photo_alt"/>   
          <Descript>            
            <NameAge>{usuario.name}, {usuario.age}</NameAge>            
            <Bio>{usuario.bio}</Bio>
          </Descript>
      </Center>

      <footer>
        <Icon>
            <button onClick = {( ()  => chooseFalse(usuario.id) )}>♥</button>
      </Icon>
        <Icon>
            <button onClick = {( ()  => choose(usuario.id) )}>X</button>
        </Icon>      
      </footer>
    </CenterGrid>

    
  </MainGrid>




    )
}

export default Card;