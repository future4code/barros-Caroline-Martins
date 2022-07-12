import styled from "styled-components";


export const Inicio=styled.div`
    margin-top:20px;
    width: 40vw;
    border-radius: 3vw;
    background-color: gray;
    padding-bottom:40px;
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
        }
        button{
            font-size: large;
            padding: 5px 10px;
            border-radius: 10px;
            margin: 20px;
        }
        button:hover{
        background-color: black;
        color: white;
    }
    }



`
