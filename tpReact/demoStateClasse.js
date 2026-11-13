//terminee
import React from "react";
export default class Message extends React.Component{

//constructor
constructor(){
    super();//on appelle le constructeur de base de component 
    // on definit le state = initialisation
    this.state={message:"bienvenue visiteur",bouton :"inscription"};
}
inscription () //methode 
{
    console.log("inscrit");//modifier state
this.setState ({message:"votre inscription est effectuée",bouton:"merci" })
}
//render
render (){
    return <div><h2>{this.state.message} </h2>
    <button onClick={()=>this.inscription()} >{this.state.bouton} </button>
     </div>
}   
}
