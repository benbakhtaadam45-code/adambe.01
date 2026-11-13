import { useState } from "react";


export default function Input() {
    const [nom, setNom] = useState('');
    const [Prenom, setPrenom] = useState('');
    const [Age, setAge] = useState('');

    return <>
        <div><form>
            <label>nom :</label>
            <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />

            <label>Prenom :</label>
            <input type="text" value={Prenom} onChange={(e) => setPrenom(e.target.value)} />

            <label>Age :</label>
            <input type="text" value={Age} onChange={(e) => setAge(e.target.value)} />
            <button >envoyer</button>
        </form>

        </div></>
}