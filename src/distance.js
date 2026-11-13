import { useEffect, useState } from "react";
import axios from "axios";
 
function Api2() {
 
    const [utilisateurs, setUtilisateurs] = useState([]);
  const [id, setId] = useState("1");
 
  useEffect(function () {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(function (res) {
        setUtilisateurs(res.data);
      });
  }, []);
 
  const utilisateur = utilisateurs.find(function (u) {
    return u.id === parseInt(id);
  });
 
  return (
    <div>
      <h1>Détails utilisateur</h1>
 
      <label>Donner le id : </label>
      <input type="text"value={id}
        // e = evenmt html
        onChange={function (e) {setId(e.target.value);}} />
 
      {utilisateur ? (
        <div style={{ backgroundColor: "pink", padding: "20px", margin: "20px", width: "500px" }} >
          <h2>
            Id : {utilisateur.id} nom : {utilisateur.name}{" "}
            {utilisateur.company.name}
          </h2>
 
 <p>email : {utilisateur.email}</p>
 <p>téléphone : {utilisateur.phone}</p>
  <p>site web : {utilisateur.website}</p>
  <p>rue : {utilisateur.address.street}</p>
  <p>ville : {utilisateur.address.city}</p>
        </div>
      ) : (
        <p>Rien à afficher</p>
      )}
    </div>
  );
 
     
}