import {useState,useEffect} from "react" ;
export default function DemoUseEffect()
{
    const [nom,setNom]=useState("candidat");
       const [prenom,setPrenom]=useState("stagiaire");
       useEffect (function(){ document.title=prenom} ,[prenom]);
    return <div>
        <h1> bonjour {nom} {prenom}</h1>
nom: <input type="text" onChange={(e)=>setNom(e.target.value)}/> <br/>

prenom: <input type="text" onChangeCapture={(e)=>setPrenom(e.target.value)}/> </div>
}