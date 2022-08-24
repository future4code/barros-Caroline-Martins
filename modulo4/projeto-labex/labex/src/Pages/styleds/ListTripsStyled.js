import styled from "styled-components";
import foguete from "../imagens/foqueteLabex.png"
import mobile from "../imagens/mobile.jpg"

export const Main =styled.main`
    background-image: url(${foguete});
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 0 auto;
    padding-bottom: 1%;


    h1{
        padding-top: 5%;
        text-align: center;
        color: white;  
    }
    @media screen and (min-width: 350px)and (max-width: 800px){
        background-image: url(${mobile});
        background-size: cover;
        background-position: 60%;

        h1{
        color: black;
        padding-top: 5%;
        background-color: white;
        border-radius: 20px;
        opacity: 0.7;
        }
    }
`

export const Card = styled.main`
    background-color: white;
    opacity: 0.7;
    box-shadow: 0 0 1rem blue;
    border-radius: 10px;
    align-items: center;
    text-align: center;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 1%;
    font-family: Georgia, 'Times New Roman', Times, serif;
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
       margin-bottom: 1%;
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