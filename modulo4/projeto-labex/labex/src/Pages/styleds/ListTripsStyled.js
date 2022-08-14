import styled from "styled-components";
import astronauta from "../imagens/planetas.jpg"

export const Card=styled.main`
    border: 2px solid lightsteelblue;
    border-radius: 10px;
    align-items: center;
    text-align: center;
    margin-left: 40vh;
    margin-right: 40vh;
    margin-top: 1vh;
  



    @media (min-width:1140px )and(max-width: 450px ){
    background-color: red;
    border: 2px solid red;
    border-radius: 10px;
    align-items: center;
    margin-left: 20vh;
    margin-right: 20vh;
    margin-top: 1vh;
    padding-top: 5vh;
        

}
`


export const Header=styled.header`
    background-image: url(${astronauta});
    background-size: cover;
    background-repeat: no-repeat;
    height: 25vh;
    text-align: center;
    margin: 0;

`

export const Main=styled.main`




`
