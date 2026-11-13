import { useState } from 'react';
import Projet2 from './Projet2';

function Projet1() {
  const [compte, setCompte] = useState(0);
  const [pas, setPas] = useState(1);
  const reset=()=>{ setCompte(0); setPas(1);}

  return (
    <div>
      <Projet2/>
      <h2>Compteur : {compte}</h2>
      <h3>Pas:<input type='number' value={pas} onChange={(e)=>setPas(parseInt(e.target.value))}></input></h3>
      <button onClick={() => setCompte(compte + parseInt(pas))}>Ajouter</button>
      <button onClick={reset}>Réinitialiser</button>
      <button onClick={() => setCompte(compte - parseInt(pas))}>n9os wahd</button>
    </div>
  );
}

export default Projet1;