import styled from "styled-components";


export const MainMatchs=styled.div`
    margin-right: 500px;
    margin-left: 300px;

    @media (max-width: 375px) {
        margin-right: 300px;
        margin-left: 10px;
    }
    
    `

export const HeaderMatchs=styled.div`
    background-image: radial-gradient(circle at 50% -20.71%, #a4d8ec 0, #a7d7ef 6.25%, #abd6f1 12.5%, #b0d5f3 18.75%, #b5d3f4 25%, #bbd2f4 31.25%, #c1d0f4 37.5%, #c7cff3 43.75%, #cdcdf2 50%, #d3cbf0 56.25%, #d9caed 62.5%, #dec8ea 68.75%, #e3c7e7 75%, #e8c6e3 81.25%, #ecc5df 87.5%, #efc4da 93.75%, #f2c4d6 100%);
    border: 2px solid lightgray;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: flex-start;
    padding: 10px;
    height: 110px;
    margin-top: 10px;
    
   

    button{
        border: none;
        align-items: end;
        background-color: beige;
    }
    button:hover{
        background-color: black;
        color: white;
    }
    @media (max-width: 375px){
        background-image: none;
        border: none;
    }

`
export const IconPag=styled.img`
    width: 150px;
   
    
`

export const ConteinerBotao=styled.div`
    display: flex;
    align-items: flex-end;
    /* margin-top: 200px;
    margin-left: 140px; */
    `


export const Center=styled.div`
   margin: 0px;
   padding: 0px;
  

`
export const Imagem=styled.img`
   height: 100px;
   width: 100px;
   border-radius: 100%;

   @media (max-width: 375px) {
     background-image: none;
   }

`
export const Strong=styled.strong`
    align-items: flex-start;

`

export const AntesCenter=styled.div`
    display: flex;
    flex-direction:column;
    height: 150px;
    
    `
