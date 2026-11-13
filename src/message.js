import {  useParams } from "react-router-dom"
 
export default function Message()
{     const Data=useParams();
//Data objet contenant des paires clé/valeur qui sont
//  les paramètres//sur l'url.
//dans notre cas; nous avons 2 paramètres
// //nom obligatoire prenom facultatif
 
    return <h1 style={{backgroundColor:"blue"}}>
         bonjour {Data.nom} {Data.prenom}{Data.age}  </h1>
}
 