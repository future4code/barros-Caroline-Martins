
import styled from "styled-components";

export const Descript = styled.div`
background-color: black;
color: white;
font-family: Georgia, 'Times New Roman', Times, serif;
position: relative;
top: -100px;
left: 50px;
border-radius: 10px;
opacity: 0.7;
width: 70%;
box-shadow: 0px 0.5px 15px gray;

 @media (max-width: 375px) {
 left: 5px;
 width: 50%;
 top: -80px;
 left: 30px;
}
`

export const Bio = styled.div`
position: relative;
bottom: 12px;
text-align: center;
@media (max-width: 375px){
    bottom: 1px;
    
}
`
export const NameAge = styled.h3`
margin-top: 5px;
text-align: center;
`

export const Imagem = styled.img`
width: 350px;
height: 390px;
margin-left: 43px;
margin-top: 43px;
box-shadow: 0px 5px 15px black;

@media (max-width: 375px){
    width : 200px;
    height: 300px;
    margin-left: 30px;
    margin-top: 30px;
    box-shadow: 0px 0px 10px black;
    align-items: center;
}
`

export const MainGrid = styled.div`
    margin-left: 350px;
    /* margin-right: 350px; */
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;

    @media (max-width: 375px){
        margin-left: 50px;
    }
    `

export const CenterGrid = styled.div`
  background-image: radial-gradient(circle at 50% -20.71%, #a4d8ec 0, #a7d7ef 6.25%, #abd6f1 12.5%, #b0d5f3 18.75%, #b5d3f4 25%, #bbd2f4 31.25%, #c1d0f4 37.5%, #c7cff3 43.75%, #cdcdf2 50%, #d3cbf0 56.25%, #d9caed 62.5%, #dec8ea 68.75%, #e3c7e7 75%, #e8c6e3 81.25%, #ecc5df 87.5%, #efc4da 93.75%, #f2c4d6 100%);
  border: 1px solid gray;
  height: 75vh;
  @media (max-width: 375px) {
    margin-top: 10px;
    height: 80vh; 
}
  
  `
export const Header =styled.div`
    background-image: radial-gradient(circle at 50% -20.71%, #a4d8ec 0, #a7d7ef 6.25%, #abd6f1 12.5%, #b0d5f3 18.75%, #b5d3f4 25%, #bbd2f4 31.25%, #c1d0f4 37.5%, #c7cff3 43.75%, #cdcdf2 50%, #d3cbf0 56.25%, #d9caed 62.5%, #dec8ea 68.75%, #e3c7e7 75%, #e8c6e3 81.25%, #ecc5df 87.5%, #efc4da 93.75%, #f2c4d6 100%);
    border: 2px solid lightgray;
    display: grid;
    grid-template-columns: 4fr 1fr;
    justify-content: flex-start;
    padding: 10px;
    height: 110px;
    margin-top: 10px;

    @media (max-width: 375px) {
        background-image: none;
        
    }


`

export const Center = styled.div`
    background-image: radial-gradient(circle at 50% -20.71%, #a4d8ec 0, #a7d7ef 6.25%, #abd6f1 12.5%, #b0d5f3 18.75%, #b5d3f4 25%, #bbd2f4 31.25%, #c1d0f4 37.5%, #c7cff3 43.75%, #cdcdf2 50%, #d3cbf0 56.25%, #d9caed 62.5%, #dec8ea 68.75%, #e3c7e7 75%, #e8c6e3 81.25%, #ecc5df 87.5%, #efc4da 93.75%, #f2c4d6 100%);
    height: 450px;

    @media (max-width: 350px) {
        height: 300px;
        background-image: none;

    }
`

export const ConteinerBotao=styled.div`
    /* margin-top: 200px;
    margin-left: 140px; */
    `
export const Icon = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    justify-content: center;
    margin-left: 30px;
    position: relative;

div{
    height: 40%;
    
}
img{
    height: 50px;
}
img:hover{
    color: black;
}
`


export const IconPag=styled.img`
    width: 150px;
    
`

export const Final=styled.div`
    display: flex;
    align-items: center;

    button{
        margin: 50px;
        margin-left: 190px;
        padding: 10px;
        color: aqua;
        background-color: black;
    }

`
export const TextFinal=styled.div`
    text-align: center;

`









