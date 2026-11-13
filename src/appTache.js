import { useDispatch, useSelector } from "react-redux"
import { Add_task, Update_task, Delete_task } from "./Actions/actionsTODO"
import { useState } from "react";
export default function Apptask() {
    const myDispatch = useDispatch();
    const data = useSelector(s => s.tasks);
    const [nomtask, setNomtask] = useState('');
    const [prioritetask, setprioritetask] = useState('');
    const [TextBouton, setTextBouton] = useState('ajouter');
    const [indice, setIndice] = useState('');
    return <div>
        <h1>Composant App Task</h1> 
           <form><label>nom task</label><input type="text"
            value={nomtask} 
            onChange={(e) => setNomtask(e.target.value)} name="task" /> 
           
            <br />
            <label> priorité</label><select value={prioritetask} 
            onChange={(e) => setprioritetask(e.target.value)} >
                <option>urgent</option><option>très important</option>
                <option>important</option><option>moins important</option>
                </select>
                <br />

            <input type="button" onClick={() => {
                if (TextBouton === "ajouter")
                    myDispatch(Add_task(nomtask, prioritetask));
                else {
                    myDispatch(Update_task(indice, nomtask, prioritetask));
                     setTextBouton('ajouter');
                }
            }}
                value={TextBouton} />  <div style={{ backgroundColor: 'pink', width: '400px' }}>
                <h4>récupération des données du store</h4>   
                 <table>
                    <thead>
                    {data.map((f, i) => <tr key={i}><td><input type="checkbox" />
                    {f.nom} {f.priorite}</td>
                    <td> <input type="button"
                        onClick={() => { myDispatch(Delete_task(i)) }}
                        value="supprimer" />
                        <input type="button"
                            onClick={(e) => {
                                setNomtask(f.nom); setprioritetask(f.priorite); setIndice(i)
                                setTextBouton('modifier');
                            }} value=" éditer " /></td></tr>)}</thead></table> </div>
        </form>
         <input type="button" value="supprimer la selection" />
         </div>
}