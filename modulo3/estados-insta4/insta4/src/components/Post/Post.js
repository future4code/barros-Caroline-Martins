import React, {useState} from 'react'
import './style.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'



function Post(props){
  
  const [numeroCurtidas, setnumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [resposta, setResposta] = useState("")
 
  const onClickCurtida = () => {
   (setCurtido(!curtido)) 
    if (curtido === false){
      {setnumeroCurtidas(numeroCurtidas +1)}
    }
    else{
      {setnumeroCurtidas(numeroCurtidas -1)}
    }
    console.log('Curtiu!')
  }
  
  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} respostaUsuario={resposta} />
    }
  
  }
  
  const handleResposta = (event) =>{
    setResposta(event.target.value)
    console.log(resposta);
  }
  

  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }
 

  let iconeCurtida

    if(curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} onChangeComentario={handleResposta} />
      // console.log(comentando)
    }
    
    //LISTA
    // const postagem1=[
    //     {nome:"Paulinha",imagem: 'https://picsum.photos/50/55' , fotoPost:'https://picsum.photos/40/50'},
    //     {nome:"Antonio" , imagem:'https://picsum.photos/50/50' , fotoPost:'https://picsum.photos/210/150'},
    //     {nome:"Carol" , imagem : 'https://picsum.photos/9/50' , fotoPost:'https://picsum.photos/206/150'}]
    
//     const arrayComponentes = postagem1.map((elemento,index)=>{
//     return (
//         <div key={index} className='conteiner'>
//             <div>
//                 <p>{elemento.nome}</p>
//                 <img src={elemento.imagem}/>
//                 <img src={elemento.fotoPost}/>
//             </div>
//         </div>
//     )
// })

  return(
    <div className = 'PostContainer'>
      <div className = 'PostHeader'>
        <img className = 'UserPhoto' src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>

        {/* {arrayComponentes} */}
      </div>
      <img className = 'PostPhoto'src={props.fotoPost} alt={'Imagem do post'}/>
      
       


      <div className = 'PostFooter'>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </div>
      { componenteComentario}
    </div>
  )
}


export default Post;