import { useState } from 'react';

function tester1(){
const [count,setCompte]= useState(0) ;
const [pas,setPas]= useState(1); 
const reset=()=>{setCompte(0);setPas(1);}
return(
    <div className='adam'>
        <h1>compteur:{count}</h1>
        <h2>pas:{pas}<input type="number" value={pas} onChange={(e)=>setPas(parseInt(e.target.value))}></input></h2>
    <button onClick={()=>setCompte(count + 1)}>clic:{count}</button>
    <button onClick={()=>setPas(count)}></button></div>
) ;
}
export default tester1 ;