import styled from "styled-components";



export const Form=styled.form`
    margin-top:20px;
    width: 40vw;
    border-radius: 3vw;
    background-color: gray;
    padding-bottom:40px;
    text-align: center;
    h1{
        margin:10px;
        color: white;
    }
        form{
        display: flex;
        flex-direction: column;
        }
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

`

export const Final=styled.div`
        text-align: center;
        background-color: gray;
        color: orange;

`