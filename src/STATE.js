import React from 'react'
export default class Message extends React.Component{
    constructor(){
        super();
        this.state={message:"bienvenue visiteur",boutton:"inscription"}; }
        inscription()
        {console.log("inscrit");
            this.setState({message:"votre inscription est effectuee",boutton:"merci"});
        }
                render(){
                    return <div><h2>{this.state.message} </h2>
               
            <button onClick={()=>this.inscription()}>{this.state.boutton}
            </button></div>
         }
   
}