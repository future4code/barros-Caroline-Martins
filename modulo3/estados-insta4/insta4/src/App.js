import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {

  const postagem1=[
    {nome:"Paulinha",imagem: 'https://picsum.photos/50/55' , fotoPosta:'https://picsum.photos/40/50'},
    {nome:"Antonio" , imagem:'https://picsum.photos/50/50' , fotoPosta:'https://picsum.photos/210/150'},
    {nome:"Carol" , imagem : 'https://picsum.photos/9/50' , fotoPosta:'https://picsum.photos/206/150'}]

return(
  <div className='MainContainer'>
    {postagem1.map((item)=>{
      return <Post nomes={item.nome} foto ={item.imagem} fotoPosta={item.fotoPosta}/>
    })}







           {/* <Post */}
            {/* // nomeUsuario={'paulinha'}
            // fotoUsuario={'https://picsum.photos/50/50'}
            // fotoPost={'https://picsum.photos/200/150'}
          // /> */}
          {/* <Post
            nomeUsuario={"Carol"} */}
            {/* // fotoUsuario={'https://picsum.photos/9/50'}
            // fotoPost={'https://picsum.photos/199/150'}
          />
           <Post */}
            {/* // nomeUsuario={"Antonio"}
            // fotoUsuario={'https://picsum.photos/19/50'}
            // fotoPost={'https://picsum.photos/201/150'}
          /> */}
  </div>
)

}


export default App;
