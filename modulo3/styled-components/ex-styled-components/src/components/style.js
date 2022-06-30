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


`
export const TagFooter=styled.h3`
    text-align: center;
    background-color: grey;
    height: 30px;
    margin: 0;
`