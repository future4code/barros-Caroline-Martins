import styled from "styled-components";



export const MyComponente=styled.div`
    
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    aside{
        background-color: orange;
        width: 20%;
        height: 700px;
    }
    main{
        flex-direction: column;
        background-color: white;
        align-items: flex-end;
    }
    div{
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
        width: 100%;
        
        
    }
    button{
        font-family: Arial, Helvetica, sans-serif;
    }
    button:hover{
        width: 90px;
    }
    button:hover{
        background-color: black;
        color: white;
    }
    p{
        font-family: Arial, Helvetica, sans-serif;
        padding: 0;
        margin: 0;
    }


`

export const Lista=styled.div`
    border: solid 1px black;
    height: 40px;
    display: flex;
    align-items: flex-end;
    margin: 50px;
    background-color: lightgreen ;
    div{
        height: 1000px;
        width: 500px;

    }
    p{
        font-family: Arial, Helvetica, sans-serif;
        margin: 10px;
        padding: 0;
    }
    button:hover{
        width: 30px;
    }
    button{
        text-align:end;
    }

    
    
`




export const Header=styled.header`
    width: 100%;
    height:70px;
    display: flex;
    justify-content: center;
    h3{
        margin: 0;
        padding: 30px;
        
    }
    img{
        width: 50px;
    }
`

export const TagFooter=styled.h3`
    text-align: center;
    background-color: grey;
    height: 30px;
    margin: 0;
`