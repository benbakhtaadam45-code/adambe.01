const personnes = [ 
{ nom: "Rami", age: 33, estMember: true }, 
{ nom: "Fatihi", age: 24, estMember: false }, 
{ nom: "Chakib", age: 45, estMember: true }, 
{ nom: "Mounir", age: 37, estMember: false }, 
]; 
function c3()
{ console.log(personnes);
    /* return <ul>{personnes.map(function(pers)}
     { return <li>{pers.nom}</li>})} </ul> */
     return <ul>{ personnes.map(pers=><li>{pers.nom}</li>)}</ul>
}

//creer le composant c31 qui retourne la liste des noms dans une liste deroulante select et option
function c31()
{ console.log(personnes);
     return <select>{ personnes.map(pers=><option>{pers.nom}</option>)}</select>
}

//creer le composant c32 qui retourne la liste des personnes (nom,age,member) dans une table html(table)
function c32()
{ return <table> 
    <tr><th>nom</th><th>age</th><th>estMember</th></tr>
    {personnes.map(p=><tr> <td>{p.nom}</td> <td>{p.age}</td> <td>
    {p.estMember==true?'oui':'non'}
        </td></tr>) }
</table>
}
export default c32;






