import styled from "styled-components";


export const Inicio=styled.div`
    display: flex;
    justify-items: center;
    
    margin-top:20px;
    width: 40%;
    border-radius: 3%;
    padding-bottom:40px;
    padding: 50px;
    h1{
        margin:10px;
        color: white;
    }
    form{
        display: flex;
        flex-direction: column;
       
        label{
            color: orange;
            font-size: 20px;
            font-weight: bold;
           
        }
        input{
            margin: 10px;
            border-radius: 15px;
            font-size: 20px;
            padding: 5px 15px;
            width: 30vw;
        }}
            
`

export const Conteiner=styled.div`
    background-color: grey;
    text-align: center;
   button{
       font-size: large;
       padding: 5px 50px;
       border-radius: 10px;
       margin: 0;

    button:hover{
       background-color: black;
       color: white;
       }
   }

`


// export const Botao=styled.button`
// `
