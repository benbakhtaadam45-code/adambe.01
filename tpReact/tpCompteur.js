//terminer
import React from "react";
export default class Compteur extends React.Component {
  constructor() {
    super();
    this.state = {compteur: 0}; }

  incrementer() {
    this.setState({ compteur: this.state.compteur + 1 });}

  decrementer() {
    this.setState({ compteur: this.state.compteur - 1});}

  reinitialiser() {
    this.setState({ compteur: 0});}

  render() {
    return (
      <div>
        <h2>Compteur : {this.state.compteur}</h2>
        <button onClick={()=> this.incrementer()}>Incrementer +</button>
        <button onClick={()=> this.decrementer()}>Decrementer -</button>
        <button onClick={()=> this.reinitialiser()}>Reinitialiser</button>
      </div>
    );
  }
}