/*typeActions.js : les noms des actions, écrits une seule fois pour éviter les fautes de frappe.
actionsFruit.js : les fonctions qui créent les actions (ajouterFruit, supprimerFruit, viderPanier).
reducerFruit.js : la logique qui modifie l’état selon le type d’action (switch/case).
index.js : crée le store et entoure l’application avec le Provider.
AppFruit.js : le formulaire, qui envoie les actions avec dispatch.
AffichageFruits.js : l’affichage, qui lit l’état navec useSelector.*/
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouterFruit, viderPanier } from "./Actions/actionsFruit";
import Affichage from "./AffichageFruits";

export default function AppFruit() {
  const myDispatch = useDispatch();
  const [nomFruit, setNomFruit] = useState("");
  const [quantiteFruit, setQuantiteFruit] = useState(1);

  return (
    <div>
      <h1>Composant AppFruit</h1>

      <form>
        <label>nom fruit</label>
        <input
          type="text"
          name="fruit"
          value={nomFruit}
          onChange={(e) => setNomFruit(e.target.value)}
        />
        <br />

        <label>Quantité</label>
        <input
          type="number"
          min="1"
          value={quantiteFruit}
          onChange={(e) => setQuantiteFruit(Number(e.target.value))}
        />
        <br />

        <input
          type="button"
          value="ajouter"
          onClick={() => myDispatch(ajouterFruit(nomFruit, quantiteFruit))}
        />

        <Affichage />

        <input
          type="button"
          value="vider liste"
          onClick={() => myDispatch(viderPanier())}
        />
      </form>
    </div>
  );
}
/*useDispatch : kay3tik myDispatch bach tsift les actions.
Clic 3la ajouter : kayjma3 nomFruit o quantiteFruit, kaysawb action b ajouterFruit(...), o kaysifto l reducer.
vider liste : myDispatch(viderPanier()).*/