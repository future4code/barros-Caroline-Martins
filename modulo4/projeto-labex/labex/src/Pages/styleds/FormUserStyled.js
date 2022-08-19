import styled from "styled-components";
import cabecalho from "../imagens/planetas.jpg"

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 50vh;
    margin-left: 45vh;
    margin-top: 5vh;
    padding-bottom: 10vh;
    box-shadow: 0 0 2em blue;
    border-radius: 5px;
    
    label{
        height: 15%;
        padding-top: 4vh;
        font-weight: bold;
        font-family: Georgia, 'Times New Roman', Times, serif;
        margin-left: 2%;
        margin-right: 2%;
    }
    input{
        height: 50vh;
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
        padding-bottom: 2%;
        margin-left: 2%;
        margin-right: 2%;
        font-weight: bold;
        font-family: Georgia, 'Times New Roman', Times, serif;
        box-shadow: 0 0 1em blue;
        border: none;
    }
    button:hover{
        background-color: lightskyblue;
        padding-top: 1vh;
        padding-bottom: 1vh;
        border: none;
    }


@media screen and (min-width: 350px)and (max-width: 800px){
    margin-left: 10vh;
    margin-top: 5vh;
    width: 60vw;
    input{
        height: 10vh;
        width: 58%;
    }


}

`

export const Section = styled.div`
    align-items: center;
    margin-left: 60vh;
    font-family: Georgia, 'Times New Roman', Times, serif;


    button{
     padding-right: 10vh;
     padding-left: 10vh;
     border-radius: 5px;
     
    }
    button:hover{
     padding-right: 20vh;
     padding-left: 16vh;
     background-color: lightskyblue;
     color: white;
     border: none;
     
    }

@media screen and (min-width: 350px)and (max-width: 800px){
    margin-left: 10vh;
    button:hover{
     padding: 3vh;
     background-color: lightskyblue;
     color: white;
     border: none;
     
    }
}
    
`

export const Header = styled.header`
    background-image: url(${cabecalho});
    background-size: cover;
    height: 25vh;
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