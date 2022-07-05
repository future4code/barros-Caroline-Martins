import styled from "styled-components";


export const Header = styled.header`
    
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

export const Conteiner=styled.aside`
    background-color: pink;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding: 0;
    margin: 0;

    aside{
        background-color: orange;
        width: 20%;
        height: 700px;

    }
    main{
        background-color: white;
        width: 60%;
    }
    div{
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
    button:hover{
        width: 150px;
    }
    button:hover{
        background-color: black;
        color: white;
    }
    p{
        padding: 0;
        margin: 0;

    }


`
export const TagFooter=styled.h3`
    text-align: center;
    background-color: grey;
    height: 30px;
    margin: 0;
`