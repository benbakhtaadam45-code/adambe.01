import { useSelector ,useDispatch } from "react-redux"
import { Changepas,Decrementer,Incrementer,Raz } from "./Actions/actioncompteur1"
export default function Composant(){

    const X = useSelector(
        (state) => state );
    
    const dispatch = useDispatch()
    return(
<>
<div>
    <h2>compteur: {X.compteur}</h2><br></br>
    <h2>pas : {X.pas}</h2>
    <input type='number' min="1" value={X.pas} onChange={(e)=>dispatch(Changepas(e.target.value))} />

    <button onClick={()=>dispatch(Incrementer())}>incrementer</button>
    <button onClick={()=>dispatch(Decrementer())}>decrementer</button>
    <button onClick={()=>dispatch(Raz())}>RAZ</button>
</div>
</>
    )
}