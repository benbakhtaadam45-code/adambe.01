import { useDispatch, useSelector } from "react-redux"
import { Add_task, Update_task, Delete_task } from "./Actions/actionsTODO"
//les actions, fonctions li kay-sn3o l’message li kayt-seft l-Redux
import { useState } from "react";
export default function Apptask() {
    const myDispatch = useDispatch();
    //kay3tik fonction tseft biha action l-store
    //  (ajouter, modifier, supprimer)
    const data = useSelector(s => s.tasks);
    //se repete
    const [nomtask, setNomtask] = useState('');//chno ktebti f input
    //bach t7fed données locales dyal component (li katbdel)
    const [prioritetask, setprioritetask] = useState('');//chno khtariti fselect
    const [TextBouton, setTextBouton] = useState('ajouter');//texte dyal bouton: 'ajouter' wla 'modifier'
    const [indice, setIndice] = useState('');//numéro dyal tâche li kat-modifiha
    return <div>

        <h1>Composant App Task</h1>

        <form><label htmlFor="priorite">nom task</label><input type="text"
            value={nomtask}
            onChange={(e) => setNomtask(e.target.value)}
            name="task"
            
            /*value={nomtask} : l’input kay-ban fih chno f state.
            onChange : kol mra tkteb 7arf, kat-ex-cuter had fonction.
            e.target.value : l-texte li ktebti daba.
            setNomtask(...) : kat7et had texte f state.*//>


            <br />
            <label htmlFor="priorite"> priorité</label><select value={prioritetask}
                //value + onChange. L-valeur li katkhtar katt7at f prioritetask.
                onChange={(e) => setprioritetask(e.target.value)}>
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
                        {data.map((i, f) =>
                            //kaydouz 3la kol tâche w kaydir lha ligne.
                            <tr key={i}><td><input type="checkbox" />
                                {f.nom} {f.priorite}</td>
                                <td> <input type="button"
                                    onClick={() => { myDispatch(Delete_task(i)) }}
                                    //Kat-seft action Delete_task m3a i (index dyal tâche),
                                    //  w reducer kay7yedha mn tableau.
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