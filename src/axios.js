import {useState,useEffect} from "react"
import axios from "axios"

export default function useDataUser(){
    const [listeU,setListeU] = useState([])

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res => setListeU(res.data)))
},[])
return listeU;
}