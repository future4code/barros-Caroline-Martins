import React, {useState} from "react";


import { Form, Card } from "./style"


function Main(){

    const [usuarioName , setUsuarioName] =useState('');
    const [usuario, setUsuario] =useState([])
    
    function handleName(){
        const newName = {
            usuarioName : setUsuarioName,

        }; 
        setUsuario([newName]);
    
    }
    const novo=usuarioName.map((outro) => {<Card nome={handleName.newName.nomeUsuario} />})
    return(
        <>
        {/* section para barra lateral esquerda */}
        {/* <section>   </section> */}

        <Form>
            {/* input remetente
            <p>Remetente:</p> <input type="text" 
            
            onChange={e => SetNomes(e.target.value)}
             />

            {/* input mensagem */}
            {/* <p>Msg:</p> <input type=""text placeholder="Digite mensagem..." */}
            {/* // onChange={e => SetMensagem(e.target.value)}
            /> */}
            {/* <button type="button" onClick={handleName} >
            Enviar mensagem
            </button>
            
            {
                name.map(nomes => <Card name={ newName.usuario } /> )
            } */}

            <input
            type="text"
            placeholder="digite mensagem..."
            onChange={e => setUsuarioName(e.target.value)}/>

            <button
            type="button"
            onClick={handleName}
            >Enviar mensagem</button>
            <Card/>
            
        </Form>

        {/* section para barra lateral direita */}
        {/* <section></section> */}



        </>
    )
}
export default Main;