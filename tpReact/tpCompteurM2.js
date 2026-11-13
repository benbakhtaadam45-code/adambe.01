//terminee
import React , {useState} from "react";
export default function C()
{
//pour gérer les états:on utilise un hook (function)
//appelé userState
const [count,setCount]=useState(0);

return  <div> <h3>compteur:{count}</h3>
<button onClick={()=>setCount(count+1)} > Incrémenter </button>
<button onClick={()=>setCount(count-1)}  >Décrémenter</button>
<button onClick={()=>setCount(0)}  >Réinitialiser</button>
</div>
}