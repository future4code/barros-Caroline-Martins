import styled from "styled-components";
import astronauta from "../imagens/planetas.jpg"

export const Card = styled.main`
    border: 2px solid lightsteelblue;
    border-radius: 10px;
    align-items: center;
    text-align: center;
    margin-left: 40vh;
    margin-right: 40vh;
    margin-top: 1vh;
    font-family: Georgia, 'Times New Roman', Times, serif;

@media screen and (min-width: 400px)and (max-width: 800px){
    border: 2px solid lightskyblue;
    border-radius: 10px;
    align-items: center;
    margin-left: 5vh;
    margin-right: 5vh;
    margin-top: 1vh;
    padding-top: 5vh;
}
`


export const Header = styled.header`
    background-image: url(${astronauta});
    background-size: cover;
    background-repeat: no-repeat;
    height: 25vh;
    text-align: center;
    margin: 0;

`

export const Main = styled.main`

`
export const Button = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 6vh;


    button{
       width: 10vw;
       height: 5vh;
       font-family: Georgia, 'Times New Roman', Times, serif;
       border: lightsteelblue;
       border-radius: 10px;
    }
    button:hover{
        background-color: lightskyblue;
    }

@media screen and (min-width: 400px)and (max-width: 800px) {

    button{
        width: 16vw;
        height: 6vh;
    }
    
}

`
export const Carreg = styled.h3`
    width: 100vw;
    text-align: center;
`