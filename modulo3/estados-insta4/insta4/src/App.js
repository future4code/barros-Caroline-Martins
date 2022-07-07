import React, { useState } from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {

  const [postagem1,setPostagem1]=useState([
    {nome:"Paulinha",imagem: 'https://picsum.photos/50/55' , fotoPost:'https://picsum.photos/40/50'},
    {nome:"Antonio" , imagem:'https://picsum.photos/50/50' , fotoPost:'https://picsum.photos/210/150'},
    {nome:"Carol" , imagem : 'https://picsum.photos/9/50' , fotoPost:'https://picsum.photos/206/150'}])
  

  const postaMap = postagem1.map((item)=>
  {return (
    <>
    <Post nomeUsuario={item.nome}
    fotoUsuario ={item.imagem} 
    fotoPost={item.fotoPost}/>
    </>
    )})
    console.log(postagem1)
    


    const[inputName,setInputName] = useState("")
    const[inputTexto,setInputTexto] = useState("")
    const[input,setInput]=useState("")

    const adicionaNome=(e)=>{
      setInputName(e.target.value);
      console.log(inputName)
  }

  const adicionaTexto=(e)=>{
    setInputTexto(e.target.value);
    console.log(inputTexto)
  }

  const adicionaComentario=(e)=>{
  setInput(e.target.value);
  console.log(input)
  }


  const adicionar=(event)=>{
    //PARA NÃO ATUALIZAR PAGINA
    event.preventDefault()

    const arrayAtual=[...postagem1, {nome:inputName, imagem:"https://picsum.photos/01/12" , fotoPost:"https://picsum.photos/30/50"}]
    setPostagem1(arrayAtual)

    console.log("clicou");


    setInputName("")
    setInputTexto("")
    setInput("")
}
    
return(
  <div className='MainContainer'>
    {postaMap}
    <form>
      <input type="text" required placeholder="Digite seu nome"  value = {inputName} onChange={adicionaNome}/>
      <input type="img" required placeholder="Comentario"  value = {inputTexto} onChange={adicionaTexto}/>
      <input type="img" required placeholder="Digite..."  value = {input} onChange={adicionaComentario}/>
      <button onClick={adicionar}>Adicionar</button>
    </form>

  </div>
)

}


export default App;
