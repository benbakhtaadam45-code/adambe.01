 //Action: fonction qui retourne un objet
import { add_fruit, remove_all_fruits, supprimer_fruit } from "./typeActions";
export function ajouterFruit(a, b) {
  /*
  type : ch no bghit ndir.
payload : les données (nom o quantité).
*/
  return { type: add_fruit, payload: { nom: a, quantite: b } };
}

export function viderPanier() {
  return { type: remove_all_fruits };
} 

export function supprimerFruit(ind) {
  return { type: supprimer_fruit, payload: ind };
}
/*
Les 3 fonctions : ajouterFruit, 
supprimerFruit(ind) o viderPanier().
 Kol wa7da katsawb objet action.
  Machi homa li kaybdlo l’état,
 homa ghir kywsfo chno khass ytdar.
 */