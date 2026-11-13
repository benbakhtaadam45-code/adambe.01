import { add_fruit, remove_all_fruits, supprimer_fruit } from "../Actions/typeActions";

const initialState = { fruits: [], day: "mardi" };



//type = quoi faire (quelle action)
//payload = avec quelle donnée (le contenu envoyé)



export default function ReducerFruit(state = initialState, action) {
  switch (action.type) {
    case add_fruit: {
      const res = state.fruits.find((f) => f.nom === action.payload.nom);
      if (res == null) {
        return {
          ...state,
          fruits: [
            ...state.fruits,
            { nom: action.payload.nom, quantite: action.payload.quantite },
          ],
        };
      } else {
        alert("fruit existant !!");
        return { ...state };
      }
    }

    case remove_all_fruits:
      return { ...state, fruits: [] };

    case supprimer_fruit:
      return {
        ...state, 
        fruits: state.fruits.filter((x, i) => i !== action.payload),
      };

    default:
      return state;
  }
}

/*
3lach ? Hna kaybdl l’état fe3lan. Kayakhod l’état l7ali + l’action, o kayرجع état jdid.

initialState : l’état dial bdaya (lista khawya).
case add_fruit : kaychouf wach fruit kayn déjà (find). Ila la, kayzidou b [...state.fruits, nouveau]. Ila iyeh, alert.
case remove_all_fruits : kaرجع fruits: [].
case supprimer_fruit : filter kay7ayed fruit li l’indice dyalo = payload.
default : action ma3rofach, kayرجع l’état kif ma howa.

Mohim : dima ...state o raja3 objet jdid, ma tbdelch state mobacharatan.*/