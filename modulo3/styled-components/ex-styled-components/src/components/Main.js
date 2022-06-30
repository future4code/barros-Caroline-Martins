import React from "react";
import {Conteiner} from "./style"

function Main(){
    return(
        <Conteiner>
            <aside></aside>
            <main>
                <div>
              <p>Remetente:</p> <input />
              <p>Mensagem:</p> <input/>
              <button>Enviar Mensagem</button>
                </div>
            </main>
            <aside></aside>
        </Conteiner>


    )
}


export default Main;