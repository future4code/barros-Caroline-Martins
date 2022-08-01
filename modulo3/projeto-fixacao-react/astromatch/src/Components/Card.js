import React from "react";

import {Header,} from "./styled"



function Card (props){


    return(
        <>
         <Header>
        
            <h1>ASTROMATCH</h1>
            <div> <button onClick={props.cardMatch}>BOTAO muda pagina</button></div>      
         </Header>

        <h1>ola mundo</h1>
        </>
    )
}
export default Card;