import React, {useState} from "react";


import { MyComponente, Lista } from "./style"





const Main=()=>{

const [arrayMensagem, setArrayMensagem]=useState([
    {nome:""  ,  mensagem: "" },
    
])

let arrayComponentes=arrayMensagem.map((item,index)=>{
    return (
        <Lista key={index}>
            <div>
                <p>{item.nome}</p>
                <p>{item.mensagem}</p>
                <button onClick={()=>{apagar(index)}} >x</button>
            </div>
        </Lista>
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

const apagarMensagem=(indexApagar)=>{
    const arrayAtual=arrayMensagem.filter((item)=>{
        if (arrayAtual !== indexApagar){
            return apagarMensagem
        }else {
            return arrayAtual
        }
    })
    setArrayMensagem(arrayAtual)
}


return(
    <>
    <MyComponente>

    <aside></aside>

    <main>
    {arrayComponentes}
     <div>
        <p>Remetente:</p>
        <input type="text" required placeholder=""  value = {inputName} onChange={mudaNome} onClick={apagarMensagem}/>
        <p>MSG:</p>
        <input type="text" required placeholder="Digite..."  value = {inputMensagem} onChange={mudaMensagem}/>
        <button onClick={adicionar} >Adicionar</button>
     </div>
    </main>

    <aside></aside>
    </MyComponente>
    
    </>
)
}

export default Main;
