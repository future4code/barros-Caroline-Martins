import styled from "styled-components";
import cabecalho from "../imagens/planetas.jpg"

export const Form=styled.form`
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 30vh;
    margin-left: 50vh;
    margin-top: 10vh;
    padding-bottom: 10vh;
    border: 2px solid lightskyblue;
    border-radius: 5px;
    

    input{
        height: 5vh;
        
    }
    select{
        height: 5vh;
    }


@media screen and (min-width: 400px)and (max-width: 800px){
    margin-left: 10vh;
    margin-top: 5vh;
    width: 40vw;
    input{
        height: 10vh;
        width: 40vw;
    }
}

`

export const Section=styled.div`
    align-items: center;
    margin-left: 70vh;
    font-family: Georgia, 'Times New Roman', Times, serif;


    button{
     padding-right: 15vh;
     padding-left: 15vh;
     border-radius: 5px;
     border: blue;
    }
    button:hover{
     padding-right: 20vh;
     padding-left: 16vh;
     background-color: lightskyblue;
     color: white;
     border: none;
     
    }
    
`

export const Header=styled.header`
    background-image: url(${cabecalho});
    background-size: cover;
    background-repeat: no-repeat;
    height: 25vh;
    text-align: center;
    margin: 0;

    button{
        border-radius: 5px;
        border: lightskyblue;
        padding: 4vh;
        padding: 1vw;
    }
    button:hover{
     padding: 3vh;
     background-color: lightskyblue;
     color: white;
     border: none;
     
    }
`