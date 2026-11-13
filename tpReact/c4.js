
import personnes from "./listePersonnes";
function c4()
 {const newTab = personnes.filter (p=>p.age>=35 );
    console.log(newTab);

//aficher les personnes ayant l'age >=35
return <select>
    { newTab.map(p=><option>  {p.nom } {p.age} </option>) }
</select> }

//1.cree le composant c41 qui retourne les noms des personnes member sous la foeme de liste . 
// afficher egalement leur nembre 
function c41 () {
return <ul> { personnes.filter (p=>p.estMember).map (p=><li>{p.nom}</li>)
 } </ul>
}
export default c41 ;

//method 2
function c41(){
const newTab1=personnes.filter(pers=>pers.estMember);
console.log(newTab1);
return <ul>{newTab1.map(pers=><li>{pers.nom} </li>)}</ul>
}

