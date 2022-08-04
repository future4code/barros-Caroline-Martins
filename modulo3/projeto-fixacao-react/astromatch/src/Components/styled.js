
import styled from "styled-components";

export const Descript = styled.div`
background-color: black;
color: white;
font-family: Georgia, 'Times New Roman', Times, serif;
position: relative;
top: -100px;
left: 50px;
border-radius: 10px;
opacity: 0.6;
width: 75%;
box-shadow: 0px 0.5px 15px gray;
`

export const Bio = styled.div`
position: relative;
bottom: 12px;
text-align: center;
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
`

export const MainGrid = styled.div`

    margin-left: 350px;
    margin-right: 350px;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    `

export const CenterGrid = styled.div`
  
  border: 1px solid gray;
  height: 80vh;
  
  `
export const Header =styled.div`

border-bottom: 1px solid lightgray;
display: grid;
grid-template-columns: 4fr 1fr;
height: 100px;
margin-right: 50px;

div{
    height: 40%;
    
}
img{
    height: 100%;
}
button{
    margin: 140px;
    
}

`

export const Center = styled.div`
height: 450px;
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
    width: 80px;
    
`
export const MainMatchs=styled.div`
    margin-left: 300px;
    display: grid; 
    grid-template-columns: 1fr 1fr;
    justify-items: end;
    `
export const HeaderMatchs=styled.div`
    border: 2px solid lightgray;
    display: grid;
    grid-template-columns: 4fr 1fr;
    /* grid-template-rows: 1fr 1fr; */
    padding: 1px;
    height: 110px;

div{
    height: 40%;
    
}
img{
    height: 100%;
}

`








