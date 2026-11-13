
/*
 Que signifie JSX ? → JavaScript XML
 Hook pour mettre à jour l'état d'un composant fonctionnel → useState
 À quoi sert props ? → Pour transmettre des données entre composants
 Méthode appelée après un rendu initial → componentDidMount
 Commande pour créer un projet React → npx create-react-app my-app
 Hook pour effectuer une action après un rendu → useEffect
 Transmettre des données parent → enfant → Via props
 Objectif de React Router → Gérer la navigation entre différentes pages
 Hook pour gérer un état local → useState
Différence useState / useEffect → useState est utilisé pour gérer l'état local, useEffect pour les effets secondaires
*/

 const StateInitial = {
   bmr: 1800,
   tdee: 2000,
   activities: [],
 };
 const ReducerGlobal = (state = StateInitial,action) => {      
   switch (action.type) {
     case "SET_BMR":
       return {
         ...state,                                                     /*...state : copie tout l’ancien état (bmr, tdee, activities).*/
         bmr: action.payload,
       };
     case "SET_TDEE":
       return {
         ...state,
         tdee: action.payload,
       };
     case "SET_ACTIVITY_LEVELS":
       return {
         ...state,
         activities: action.payload,
       };
     default:
       return state;
   }
 };
export default ReducerGlobal ;
