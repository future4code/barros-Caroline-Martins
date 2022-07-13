import React from 'react';
import {Conteiner} from "./components/styleDados"
import Dados from './components/Dados';
import EnsinoSuperior from './components/EnsinoSuperior';
import Ensino from './components/Ensino';
import PagFinal from './components/PagFinal';

import SelecionarEtapa from './components/SelecionarEtapa';

function App() {
  // const [selecao,setSelecao]= useState("")


  // let ensino;
  // switch(ensino){
  //     case "incompleto":
  //        <Ensino/>
  //         break;
  //     case "completo":
  //            <EnsinoSuperior/>
  //             break;
  //     case "medio":
  //         ensino= <PagFinal/>
  //         break;
      
  // }


  return (
    <Conteiner>

    {/* <Dados/>
    {ensino}
    <Ensino/>
    <EnsinoSuperior/>
  <PagFinal/> */}

    <SelecionarEtapa/>

  <button onClick={<PagFinal/>}>Próxima Etapa</button>

    </Conteiner>
  );
}

export default App;
