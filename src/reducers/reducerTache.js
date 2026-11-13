import { Add_task, Update_task, Delete_task } from "../Actions/typeTache"
/*
L’qa3ida dyal ./ w ../ f l import
Kteba	Ma3nah
./x   	  f nafs dossier li fih l’fichier l7ali
../x	    f dossier li fo9 (tla3 mra)
../../x 	tla3 mrtayn
*/
import { produce } from 'immer';
const initialState = { tasks: [{ nom: 'tach1', 'priorite': 'urgent' }] };

export default function Reducertask(state = initialState, action) {
   console.log(action)
  switch (action.type) {
    case Add_task:


      //Redux kaycompare l’ancien state m3a jdid b ===.
      //  Ila bdelti nafs l’objet, 
      // Redux ma kayshe3rch w composant ma kay3awdch render.

      {
        const res = state.tasks.find(f => f.nom === action.payload.nom)
        // Hna kan9elleb f tableau state.tasks:
        //  wach kayn chi task 3ndha nafs smiya?
        //  si la ktrj3 undefined


        if (res == null) //: wach ma l9ina walo?
          //res = undefined → ma kaynach task → nzidouha
          //res = objet → kayna → ma nzidouhach

          return {
            ...state,

            //...state: “khod kolchi li kayn f state l9dim”.
            // Hna state fih ghir tasks, walakin ila kan fih chi haja khra (b7al user), tbqa.

            tasks: [...state.tasks,
            { nom: action.payload.nom, priorite: action.payload.priorite }]
          }
        else {
          alert('task existant!!')
          return { ...state };
        }
      }



    case Update_task:
      {
        const taskModifie = produce(state, draft =>
          /*
          state = l’état l7ali.
draft = copie dyalo, tqder tbdlha b7al ma bghiti.
mnin kat’sali, Immer kaydir state jdid, w state l9dim ma kaytbdelch.

*/ {
          draft.tasks.splice(action.payload.id, 1,
            { nom: action.payload.nom, priorite: action.payload.priorite }
            /*draft.tasks.splice(id, 1, obj): “mn position id, 7ayyd 1 élément, w 7ot obj blastou”. Ya3ni kan3awdou task b task jdida.

            action.payload.id = l’index (ra9m) dyal task li bghina nbdlo.
            action.payload.nom w .priorite = l’qiyam jdad. 
            o li bin {} kitsmaw objet howa li kitbdl

*/
          )
        }
        ); return taskModifie;
        // kanraj3o state jdid.
      }



    case Delete_task:
      {
        return { ...state, tasks: state.tasks.filter((x, i) => i !== action.payload) }
      }
    default: return state;
  }
}