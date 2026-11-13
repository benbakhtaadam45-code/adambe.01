import React from 'react' 
export default function Presentation(props){ 
   console.log(props) 
    return ( 
        <div > 
            <h2>Salut {props.personne.nom}   {props.personne.prenom}  </h2> 
            <hr/> 
        </div> 
    ) 
} 