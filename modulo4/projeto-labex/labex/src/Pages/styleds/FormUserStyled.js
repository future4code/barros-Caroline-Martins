import styled from "styled-components";
import cabecalho from "../imagens/planetas.jpg"

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 50%;
    margin-left: 10%;
    margin-top: 5%;
    padding-bottom: 1%;
    box-shadow: 0 0 2em blue;
    border-radius: 5%;
    
    label{
        height: 15%;
        padding-top: 4vh;
        font-weight: bold;
        font-family: Georgia, 'Times New Roman', Times, serif;
        margin-left: 2%;
        margin-right: 2%;
    }
    input{
        height: 50%;
        font-style: italic;
        border: none;
        margin-left: 2%;
        margin-right: 2%;
       
    }
    select{
        height: 5vh;
        font-style: italic;
        border: none;
        margin-left: 2%;
        margin-right: 2%;
    }
    button{
        margin-top: 4%;
        padding-top: 2%;
        padding-bottom: 1%;
        margin-left: 2%;
        margin-right: 2%;
        font-weight: bold;
        font-family: Georgia, 'Times New Roman', Times, serif;
        box-shadow: 0 0 1em blue;
        border: none;
    }
    button:hover{
        background-color: lightskyblue;
        padding-top: 3%;
        padding-bottom: 3%;
        border: none;
    }




`

export const Header = styled.header`
    background-image: url(${cabecalho});
    background-size: cover;
    height: 20vh;
    text-align: center;
    margin-top: 0;
    padding-top: 2%;

    h1{
        color: white;
    }

    button{
       width: 10%;
       height: 5vh;
       font-family: Georgia, 'Times New Roman', Times, serif;
       border: lightsteelblue;
       border-radius: 10px;
    }
    
    button:hover{
        background-color: lightskyblue;
    }

    @media screen and (min-width: 350px)and (max-width: 800px){
        button{
            width: 25%;
        }
        h1{
            color: black;
            background-color: white;
            border-radius: 20px;
            opacity: 0.7;
        }
    }
     
    
`