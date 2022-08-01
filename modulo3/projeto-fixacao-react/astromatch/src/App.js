import React, {useState,useEffect} from "react";
import Card from "./Components/Card"
import Match from "./Components/Matchs"

function App() {
  const [pag, setPag] = useState(false)

  const paginaCard = () => {
    setPag (true)
  }

  const paginaMatches = () => {
    setPag (false)
  }

  //condicao para trocar a pagina
  const trocaTela =() =>{
    if (pag){
      return (
        <Match matchCard = {paginaMatches} />
      ) 
    }else{
      return(
        <Card cardMatch = {paginaCard}/>
)}}

  useEffect (() =>{trocaTela()})


  return (
   <div>

   <div>{trocaTela}</div>
   
   
   </div>
  );
}

export default App;
