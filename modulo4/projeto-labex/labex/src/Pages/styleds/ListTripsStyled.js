import styled from "styled-components";
import astronauta from "../imagens/planetas.jpg"

export const Card = styled.main`
    border: 2px solid lightsteelblue;
    border-radius: 10px;
    align-items: center;
    text-align: center;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 1%;
    font-family: Georgia, 'Times New Roman', Times, serif;


`


export const Header = styled.header`
    background-image: url(${astronauta});
    background-size: cover;
    background-repeat: no-repeat;
    height: 25vh;
    text-align: center;
    margin-top: 0;
    padding-top: 2%;

    h1{
        color: white;
    }
    @media screen and (min-width: 350px)and (max-width: 800px){

        h1{
            color: black;
            background-color: white;
            border-radius: 20px;
            opacity: 0.7;
        }
    }
`

export const Button = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 5%;

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
        padding-top: 2%;

        button{
            width: 25%;
        }
    }
`
export const Carreg = styled.h3`
    width: 100vw;
    text-align: center;
`