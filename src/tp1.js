import React , {useState} from 'react';
export default function Forumulaire(){
    const [ nom, setNom] = useState('')
    const [ prenom, setPrenom] = useState('')
    const [ ville, setVille] = useState('')
    const [ show, setShow] = useState(false)
    const [ListeP,setListeP] = useState ([]);
    const  ajouter = (e) => {
        e.preventDefault();
        setListeP([...ListeP, {nom : nom, prenom : prenom, ville : ville}])
         setShow(true)
    }
    const supprimer = (i) => {
    setListeP(ListeP.filter((p,id) => id !==  i/*!== different    === egale*/ 
))}
    const  Affichertable = () => {
        return (
        <table style={{  border: "3px solid black" , width:"800px" , }}><tr>
            <td> index</td>
            <td> nom</td>
            <td> prenom</td>
            <td> ville</td></tr>
            {ListeP.map((nid ,i) => <tr><td>{i+1}</td><td>{nid.nom}</td>
            <td>{nid.prenom}</td><td>{nid.ville}</td><td>
            <button  onClick={()=>supprimer(i)}>supprimer</button> </td>
            </tr>)}
            </table>




        )
    }

return (
    
    <>
    {ListeP.length}
    <form>
        <label htmlFor='nom'> nom :</label> 
        <input type='text' required  id='nom'  onChange={(e) => setNom(e.target.value)}/><br/>

        <label htmlFor='prenom'> prenom :</label>
        <input type='text' required id='prenom' onChange={(e) => setPrenom(e.target.value)}/><br/>

        <label htmlFor='ville'> ville :</label>
        <input type='text' required id='ville' onChange={(e) => setVille(e.target.value)}/><br/>

        <button type='submit' value='ajouter'  onClick={(e) => ajouter(e)}> Ajouter</button>
       </form> 
         {show?<Affichertable/> : 'aucun donner pour afficher'}
        </>
    

)
}