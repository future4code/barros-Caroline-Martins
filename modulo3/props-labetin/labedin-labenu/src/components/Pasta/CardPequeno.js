import React from "react";
import './CardPequeno.css'


function CardPequeno(props){
   return (
    <div className="card-email-endereco">
        
        <div className="card">
            <img src={props.imagemEmail}/>
            <p>{props.email}</p>
            <img src={ props.ImagemEndereco }/>
            <p> { props.endereco } </p>
        </div>
    </div>

)}


export default CardPequeno;