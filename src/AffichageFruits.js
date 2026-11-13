import { useSelector, useDispatch } from "react-redux";
import { supprimerFruit } from "./Actions/actionsFruit";
/*useSelector : kayqra fruits mn store. Mjrd ma l’état kaybdel, had composant kay3awd yترسم wa7do.
map : kayrsm <li> l koll fruit.
Bouton supprimer : kaysift supprimerFruit(i) (l’indice dial fruit).*/
export default function Affichage() { 
  const fruits = useSelector((state) => state.fruits);
  //Quand l’état change, 
  // le composant se réaffiche automatiquement
  //  avec la nouvelle liste.
  const myDispatch = useDispatch();
  //my dispatch kisift l action l redux
  
console.log(fruits);
  return (<>
    <div style={{ background: "pink", margin: "20px 0", padding: 10 }}>
      <h3>Récupération des données du magasin</h3>
      <ul>
        {fruits.map((f, i) => (
                /* {" "}espace*/
          <li key={i}>
                
            {f.nom} : {f.quantite}  {" "}
        
            <input
              type="button" 
              value="supprimer"
              onClick={() => myDispatch(supprimerFruit(i))}
            />
          </li>
        ))}
      </ul>
    </div></>
  );
}
//Clic → action (supprimerFruit) → dispatch → reducer → nouveau state → useSelector → ré-affichage