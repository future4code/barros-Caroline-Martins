import React from "react";
import './CardPequeno.css'


function CardPequeno(props){
   return (
    <div className="card-email-endereco">
        
        <div className="card">
            <img src={props.imagem}/>
            <p className="descricao">{props.descricao}</p>
        </div>
    </div>

)}


export default CardPequeno;