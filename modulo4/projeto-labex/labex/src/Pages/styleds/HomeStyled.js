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
    width: 50vw;
    height: 50vh;
    padding-left: 25%;
    align-items: center;
    
    
    div{
        margin-top: 25vh;
        background-color: white;
        opacity: 0.6;
        border-radius: 10px;
        font-family: Georgia, 'Times New Roman', Times, serif;

        
    }
    button{
     margin: 10vh;
     width: 9,5vw;
     border: 2px solid blue;
     background-color: black;
     color: white;
     opacity: 2.0;
     height: 6vh;
     border-radius: 10px;
     font-family: Georgia, 'Times New Roman', Times, serif
     

    }
    button:hover{
        background-color: blue;
        width: 10vw;
    }
    
    h3{
        text-align: center;
        padding: 10px;
        color: black;
    }
    h4{
        text-align: center;
        color: black;
    }


`