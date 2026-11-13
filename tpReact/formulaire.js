/*import React, { useState } from 'react';
export default function Form1Fonctionnel() {
  const [nom, setNom] = useState(null);
  const [prenom, setPrenom] = useState(null);
  const [age, setAge] = useState(null);
  const [show, setShow] = useState(false);

  const validation = () => {
    setShow(true);
  };
  const vider = () => {
    setNom(null);setPrenom(null);setAge(null); setShow(false);
  };
  return (
    <form>
      <label htmlFor="nom"> Votre Nom :</label><br/>
      <input type="text" onChange={(e)=> setNom(e.target.value)} required /><br/>

      <label htmlFor="prenom"> Votre Prénom :</label><br/>
      <input type="text" required id="prenom" onChange={(e)=> setPrenom(e.target.value)} /><br/>

      <label htmlFor="age"> Votre Age :</label><br/>
      <input type="number" id="age" onChange={(e)=> setAge(e.target.value)}/><br/>

      <input type="button" required value="valider" onClick={validation}/>
      <input type="reset" onClick={vider} value="Annuler"/><br/>

      {show ? (
        <div style={{ backgroundColor: "yellow", width: "300px" }}>
          {nom} {prenom} {age}
        </div>
      ) : (
        "aucune information disponible"
      )}
    </form>
  );
}*/
import React, { useState } from 'react';
export default function Form1Fonctionnel() {
  const [nom, setNom] = useState(null);
  const [prenom, setPrenom] = useState(null);
  const [age, setAge] = useState(null);
  const [show, setShow] = useState(false);

  const validation = () => {
    setShow(true);
  };
  const vider = () => {
    setNom(null);setPrenom(null);setAge(null); setShow(false);
  };
  return (
    <form>
      <label htmlFor="nom"> Votre Nom :</label><br/>
      <input type="text" onChange={(e)=> setNom(e.target.value)} required /><br/>

      <label htmlFor="prenom"> Votre Prénom :</label><br/>
      <input type="text" required id="prenom" onChange={(e)=> setPrenom(e.target.value)} /><br/>

      <label htmlFor="age"> Votre Age :</label><br/>
      <input type="number" id="age" onChange={(e)=> setAge(e.target.value)}/><br/>

      <input type="button" required value="valider" onClick={validation}/>
      <input type="reset" onClick={vider} value="Annuler"/><br/>

      {show ? (
        <div style={{ backgroundColor: "yellow", width: "300px" }}>
          {nom} {prenom} {age}
        </div>
      ) : (
        "aucune information disponible"
      )}
    </form>
  );
}
