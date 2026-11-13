import personnes from "./listePersonnes";
function c5() { 
  const res=personnes.find(p=>p.age>=35);
 console.log(res);
 return <h1> {res.nom} {res.age} </h1>
 }

function c51() {
  const res = personnes.find(p => p.age >= 35);
  console.log(res);
  return <h1>{res.nom} {res.age}</h1>;
}

export default c51;