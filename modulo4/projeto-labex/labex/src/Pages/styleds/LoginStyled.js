import styled from "styled-components";
import constelacao from "../imagens/pagLogin.jpg"


export const Main=styled.main`
    background-image: url(${constelacao});
    background-repeat: no-repeat;
    background-size: cover;
    width: 99vw;
    height: 97vh;
    padding-top: 1px;
    font-family: Georgia, 'Times New Roman', Times, serif;
   


    form{
        display: flex;
        flex-direction: column;
        width: 35vw;
        padding-left: 50vh;
        padding-top: 5vh;
        margin-top: 20vh;
        background-color: white;
        margin-right: 30vh;
        padding-right: 20vh;
        margin-left: 30vh;
        padding-left: 20vh;
        padding-bottom: 5vh;
        margin-bottom: 10vh;
        color: black;
        opacity: 0.7;
        border-radius: 10px;
        


    }
    label{
        color: black;
        text-align: center;
        font-weight: bold;
    }
    /* h3{
        color: black;
        opacity: 0.7;
        border-radius: 10px;
        text-align: center;
        background-color: white;
        padding-top: 20vh;
        margin-left: 50vh;
        margin-right: 43vh;
        margin-top: 20vh;
        padding-top: 5vh;
        padding-bottom: 5vh;
    } */
    div{
        text-align: center;
    
        button{
            background-color: black;
            font-weight: bold;
            color: white;
            border-radius: 10px;
            box-shadow: 0 0 1em blue;;
            margin-top: 2vh;
            margin-left: 1vh;
            padding: 1vh;
            padding-left: 2vh;
            padding-right: 2vh;
        }
        button:hover{
            background-color: lightskyblue;
            color: black;
            font-weight: bold;
        }
    }
   


@media screen and (min-width: 400px)and (max-width: 800px){
background-color: white;
    form{
        width: 15vw;
        padding-left: 5vh;
        padding-top: 5vh;
        margin-left: 10vh;
        background-color: black;
        color: white;
    }
    h3{
        padding-top: 10vh;
        margin-left: 20vh;
        margin-right: 43vh;
        margin-top: 20vh;
        padding-top: 5vh;
        padding-bottom: 5vh;
        background-color: none;
        color: white;

    }

}
`