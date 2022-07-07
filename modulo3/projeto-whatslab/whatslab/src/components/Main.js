import React, {useState} from "react";


import { MyComponente, lista } from "./style"





const Main=()=>{

const [arrayMensagem, setArrayMensagem]=useState([
    {nome:"",  mensagem:""},
    
])

let arrayComponentes=arrayMensagem.map((item,index)=>{
    return (
        <lista key={index}>
            <div>
                <p>{item.nome}</p>
                <p>{item.mensagem}</p>
               
            </div>
        </lista>
    )
})
//Lista 2

const[inputName,setInputName] = useState("")
const[inputMensagem,setInputMensagem] = useState()

const mudaNome=(e)=>{
    setInputName(e.target.value);
    console.log(inputName)
}

const mudaMensagem=(e)=>{
    setInputMensagem(e.target.value);
    console.log(inputMensagem)
}

const adicionar=(event)=>{
    //PARA NÃO ATUALIZAR PAGINA
    event.preventDefault()

    const arrayAtual=[...arrayMensagem, {nome:inputName, mensagem:inputMensagem}]
    setArrayMensagem(arrayAtual)

    console.log("clicou");


    setInputName("")
    setInputMensagem("")
}

const apagar=(indexRemover)=>{
    const arrayAtual=arrayMensagem.filter((item,index)=>{
        return index !== indexRemover
    })

   setArrayMensagem(arrayAtual) 
}


return(
    <>
    {arrayComponentes}
    <MyComponente>
    <section></section>
        <p>Remetente:</p>
        <input type="text" required placeholder=""  value = {inputName} onChange={mudaNome}/>
        <p>MSG:</p>
        <input type="text" required placeholder="Digite..."  value = {inputMensagem} onChange={mudaMensagem}/>
        <button onClick={adicionar} >Adicionar</button>
    <section></section>
    </MyComponente>
    
    </>
)
}

export default Main;
