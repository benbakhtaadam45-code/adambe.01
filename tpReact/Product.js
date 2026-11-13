/*export default function Product()
{
    const Pd={ref:'25445', designation:'PC Portable Gamer HP VICTUS', prix:7490, 
        Image:'images/image1.jpg'};
    return(
        <div style={{backgroundColor:'pink', textAlign:'center',
        border:'3px solid red'} }  >
            <img src={Pd.Image} alt="hp" width="100px"/>
            <h2>{Pd.ref}</h2>
            <h3>{Pd.designation}</h3>
            <h4>{Pd.prix}</h4>
            <button >Ajouter au panier</button>
        </div>
    )
}*/
import React, { useState } from "react";
export default function form() {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [ville, setVille] = useState('')
    const [show, setShow] = useState(false)
    const [listep, setListep] = useState([])
    const Ajouter = (e) => {
        e.preventDefault()
        setListep = ([...listep, { nom: nom, prenom: prenom, ville: ville, }])
        setShow(true)
    }
    const supprimer = (i) => {
        setListep(listep.filter((i, id) => id !== i))
    }
    const Affichertable = () => {
        return <table>
            <tr>
                <td>nom</td>
                <td>prenom</td>
                <td>ville</td>
                <td>action</td>
            </tr>
            {listep.map((nid, i) => <tr><td>{i + 1}</td><td>{nid.nom}</td><td>{nid.prenom}</td><td>{nid.vile}</td>
                <button onClick={() => supprimer(i)}>supprimer</button></tr>)}
        </table>
    }

return (
    <>
        {listep.length}
        <form>
        <label htmlFor="nom">nom: </label>
        <input type='text' required id="nom" onChange={(e)=>setNom(e.target.value)}/>
        <br></br>
        <label htmlFor="prenom">prenom:</label>
        <input type="text" required id="prenom" onChange={(e)=>setPrenom(e.target.value)}/>
    <br></br>
    <label htmlFor="ville">ville</label>
    <input type="text" required id="ville" onChange={(e)=>setVille(e.target.value)}/>
    <button type="submit" value="ajouter" onClick={(e)=> Ajouter(e)}>ajouter</button>
   </form>
   {show?<affichertable/> :"aucun donner pour afficher"} </>
)
}


import React , {useState} from "react";
export default function C()
{
//pour gérer les états:on utilise un hook (function)
//appelé userState
const [count,setCount]=useState(0);
const [pas,setPas]=useState(1);
const raz=()=>{setCount(0);setPas(1);}

return  <div> <h3>compteur:{count}</h3>
<h4>pas:<input type="number" value={pas}
 onChange={(e)=>setPas(e.target.value) }/> </h4>
<button onClick={()=>setCount(count+parseInt(pas))} > Incrémenter </button>
<button onClick={()=>setCount(count-parseInt(pas))}  >Décrémenter</button>
<button onClick={raz} >raz</button>
</div>
}