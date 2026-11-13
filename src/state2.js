import React from 'react' 
export default class Message extends React.Component{
    constructor(){
        super();
        this.state={number:0};
    }
incrementer(){
    this.setState({number: this.state.number +1})
}
decrementer(){
    this.setState({number: this.state.number -1})
}
reinitialiser(){
    this.setState({number: 0})
}
render(){
    return <div><h2>Compteur:{this.state.number}</h2>
    <button onClick={() => this.incrementer()}>incrementer</button>
    <button onClick={() => this.decrementer()}>decrementer</button>
    <button onClick={() => this.reinitialiser()}>reinitialiser</button>
</div>
}
}