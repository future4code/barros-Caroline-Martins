import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post
            nomeUsuario={"Carol"}
            fotoUsuario={'https://picsum.photos/9/50'}
            fotoPost={'https://picsum.photos/199/150'}
          />
           <Post
            nomeUsuario={"Antonio"}
            fotoUsuario={'https://picsum.photos/19/50'}
            fotoPost={'https://picsum.photos/201/150'}
          />
  </div>
)

}


export default App;
