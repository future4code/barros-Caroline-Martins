import React from "react";
import {Conteiner} from "./style"

function Main(){
    return(
        <Conteiner>
            <aside></aside>
            <main>
                <div>
              <b>Remetente:</b> <input type="text"></input>
              <b>Mensagem:</b> <input type="text"></input>
              <button><b>Enviar Mensagem</b></button>
                </div>
            </main>
            <aside></aside>
        </Conteiner>


    )
}


export default Main;