import styled from "styled-components";
import Sideral from "../imagens/gala.jpg"

export const Main=styled.main`
   background-image: url(${Sideral});
   background-repeat: no-repeat;
   background-size: cover;
   padding-top: 1px;
   padding-left: 1px;
   width: 98vw;
   height: 98vh;
   
   `

export const Conteiner=styled.div`
    width: 90vw;
    height: 90vh;
    padding-left: 30%;
    align-items: center;
    
    
    button{
     margin: 10vh;
     width: 10vw;
    }
    
    h3{
        color: white;
    }


`