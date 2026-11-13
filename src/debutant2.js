import React, { useState } from 'react';

const filieres = ["Développement", "Réseaux", "Design"];

const initial = [
    { id: 1, nom: "Adam", filiere: "Développement", note: 15 },
    { id: 2, nom: "Sara", filiere: "Réseaux", note: 9 },
    { id: 3, nom: "Youssef", filiere: "Développement", note: 12 },
    { id: 4, nom: "Hiba", filiere: "Design", note: 18 },
];

export default function Controle() {
    
    const [nom, setNom] = useState('')
    const [filiere, setFiliere] = useState('')
    const [note, setNote] = useState('')
    const [show, setShow] = useState(true)
    const [Liste, setListe] = useState(initial)
    const [recherche, setRecherche] = useState('')
    const [nomCherche, setNomCherche] = useState('')

    // Partie 1 : ajouter
    const ajouter = (e) => {
        e.preventDefault();
        setListe([...Liste, {  nom: nom, filiere: filiere, note: parseFloat(note) }])
        setShow(true)
        setNom('')
        setFiliere('')
        setNote('')
    }

    // Partie 3 : filter (supprimer)
    const supprimer = (id) => {
        setListe(Liste.filter((p) => p.id !== id))
    }

    // Partie 3 : filter (recherche)
    const affiches = Liste.filter((p) => p.nom.toLowerCase().includes(recherche.toLowerCase()))

    // Partie 4 : find
    const trouve = Liste.find((p) => p.nom.toLowerCase() === nomCherche.toLowerCase())

    // Partie 5 : reduce
    const moyenne = Liste.length > 0 ? Liste.reduce((acc, p) => acc + p.note, 0) / Liste.length : 0

    const meilleure = Liste.reduce((m, p) => (p.note > m ? p.note : m), 0)

    const parFiliere = Liste.reduce((acc, p) => {
        acc[p.filiere] = (acc[p.filiere] || 0) + 1
        return acc
    }, {})

    // Partie 2 : tableau
    const Affichertable = () => {
        return (
            <table style={{ border: "3px solid black", width: "600px" }}>
                <tr>
                    <td> n°</td>
                    <td> nom</td>
                    <td> filière</td>
                    <td> note</td>
                    <td> mention</td>
                    <td> boutton</td>
                </tr>
                {affiches.map((p, i) => <tr><td>{i + 1}</td><td>{p.nom}</td>
                    <td>{p.filiere}</td><td>{p.note}</td>
                    <td>{p.note >= 10 ? "Admis" : "Refusé"}</td><td>
                        <button onClick={() => supprimer(p.id)}>supprimer</button> </td>
                </tr>)}
            </table>
        )
    }

    return (
        <>
            {Liste.length}

            {/* Partie 1 : formulaire */}
            <form onSubmit={ajouter}>
                <label htmlFor='nom'> nom :</label>
                <input type='text' required id='nom' value={nom} onChange={(e) => setNom(e.target.value)} /><br />

                <label htmlFor='filiere'> filière :</label>
                <select required id='filiere' value={filiere} onChange={(e) => setFiliere(e.target.value)}>
                    <option value=''>-- choisir --</option>
                    {filieres.map((f) => <option value={f}>{f}</option>)}
                </select><br />

                <label htmlFor='note'> note :</label>
                <input type='number' min='0' max='20' required id='note' value={note} onChange={(e) => setNote(e.target.value)} /><br />

                <button type='submit'> Ajouter</button>
            </form>

            <hr />

            {/* Partie 2 : show + recherche */}
            <button onClick={() => setShow(!show)}>{show ? 'Masquer' : 'Afficher'}</button>
            <input type='text' placeholder='recherche par nom' value={recherche} onChange={(e) => setRecherche(e.target.value)} />

            {show ? <Affichertable /> : 'aucun donner pour afficher'}

            <hr />

            {/* Partie 4 : find */}
            <label htmlFor='cherche'> chercher un étudiant :</label>
            <input type='text' id='cherche' value={nomCherche} onChange={(e) => setNomCherche(e.target.value)} />
            {nomCherche ? (trouve ? <p>{trouve.nom} : {trouve.filiere}, note {trouve.note}</p> : <p>Introuvable</p>) : ''}

            <hr />

            {/* Partie 5 : reduce */}
            <p>Moyenne générale : {moyenne.toFixed(2)}</p>
            <p>Meilleure note : {meilleure}</p>
            <ul>
                {Object.entries(parFiliere).map(([f, n]) => <li>{f} : {n}</li>)}
            </ul>
        </>
    )
}
/*Partie 1 : Formulaire (5 pts)

Créer un formulaire avec : nom (text), filiere (select), note (number entre 0 et 20). Tous les champs sont obligatoires.
Les options du select doivent être générées avec map.
Au clic sur Ajouter, l’étudiant est ajouté à la liste et le formulaire est vidé.

Partie 2 : Affichage (4 pts)
4. Afficher la liste dans un tableau (map) avec les colonnes : n°, nom, filière, note, mention (“Admis” si note >= 10, sinon “Refusé”).
5. Un bouton Afficher / Masquer (show) contrôle l’affichage du tableau.

Partie 3 : Filter (4 pts)
6. Un bouton Supprimer sur chaque ligne (filter).
7. Un champ Recherche qui affiche seulement les étudiants dont le nom contient le texte saisi (filter).

Partie 4 : Find (3 pts)
8. Un champ “Chercher un étudiant” : si le nom saisi existe (exactement), afficher sa filière et sa note, sinon afficher “Introuvable” (find).

Partie 5 : Reduce (4 pts)
9. Afficher la moyenne générale de la classe.
10. Afficher la meilleure note.
11. Afficher le nombre d’étudiants par filière.*/