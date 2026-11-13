import React from "react";
import { useState } from "react";
const fruits = ["Pomme", "Banane", "Orange", "Fraise"];
const users = [
    { id: 1, name: "Sara", age: 22, city: "Rabat" },
    { id: 2, name: "Yassine", age: 25, city: "Casablanca" },
    { id: 3, name: "Imane", age: 19, city: "Salé" },
    { id: 4, name: "Omar", age: 30, city: "Fès" },
];
const adults = users.filter((user) => user.age > 20);
function App() {
    /*Affiche tous les fruits dans une liste*/
    const [nom, setNom] = useState('');
    const [age, setAge] = useState('');
    const [Ville, setVille] = useState('');

    return (  
 /*Affiche les users sous la forme : Sara - 22 ans - Rabat, un par ligne*/
     <div> 
        {users.map((user) => (
            <p key={user.id}>{user.name} - {user.age} - {user.city}</p>
        ))}
   
{users.map((user)=>( /*en gras */
    <p key={user.id}><strong>{user.name}</strong>{user.city} {user.age}</p>
))}





          <div>
      {fruits.map((fruit, index) => (
        <p key={fruit}>
          {index + 1}. {fruit}
        </p>
      ))}
    </div>

 {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
        </div>
    )
}
 <div>
      {fruits.map((fruit, index) => (
        <p key={fruit}>
          {index + 1}. {fruit}
        </p>
      ))}
    </div>

/*Crée un composant UserCard qui reçoit user en prop. Utilise-le dans le .map() pour afficher chaque utilisateur dans une petite carte (bordure, padding).*/
     
function UserCard({ user }){
    return(
        <div 
        style={{
            border:"2px solid black",
            padding:"20px",
            margin:"20px",
            borderRadius:"8 px",
        }}><strong>{user.name}</strong>
      <p>{user.age} ans</p>
      <p>{user.city}</p> <br></br><br></br> </div>)
function Adam(){
    return(
        <div>
{users.filter((user) => user.age>20)
.map((user)=>(<p key={user.id}> {user.name} - {user.age} ans - {user.city}</p>

))
} 
 </div> );



}}
       export default App;