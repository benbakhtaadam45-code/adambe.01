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