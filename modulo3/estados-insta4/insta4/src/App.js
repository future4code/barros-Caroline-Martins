import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {

  const postagem1=[
    {nome:"Paulinha",imagem: 'https://picsum.photos/50/55' , fotoPost:'https://picsum.photos/40/50'},
    {nome:"Antonio" , imagem:'https://picsum.photos/50/50' , fotoPost:'https://picsum.photos/210/150'},
    {nome:"Carol" , imagem : 'https://picsum.photos/9/50' , fotoPost:'https://picsum.photos/206/150'}]
  
  const postaMap = postagem1.map((item)=>
  {return (
    <>
    <Post nomeUsuario={item.nome}
    fotoUsuario ={item.imagem} 
    fotoPost={item.fotoPost}/>
    </>
    )})
    console.log(postagem1)
    
    
return(
  <div className='MainContainer'>


    {postaMap}


  </div>
)

}


export default App;
