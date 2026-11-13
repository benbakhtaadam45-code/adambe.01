import React, { useState } from 'react';

export default function Inscription() {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [age, setAge] = useState('')
    const [ville, setVille] = useState('')
    const [email, setEmail] = useState('')
    const [ListeP, setListeP] = useState([])

    // NOUVEAU
    const [villeChoisie, setVilleChoisie] = useState('')      // ville sélectionnée dans le select
    const [villeRecherche, setVilleRecherche] = useState('')  // ville validée avec le bouton Rechercher

    const ajouter = (e) => {
        e.preventDefault();
        setListeP([...ListeP, { nom: nom, prenom: prenom, age: age, ville: ville, email: email }])
        setNom('')
        setPrenom('')
        setAge('')
        setVille('')
        setEmail('')
    }

    const supprimer = (i) => {
        setListeP(ListeP.filter((p, id) => id !== i))
    }

    // NOUVEAU : villes sans doublons, extraites du tableau des personnes
    const villes = [...new Set(ListeP.map((p) => p.ville))]

    // NOUVEAU : clic sur le bouton Rechercher
    const rechercher = () => {
        setVilleRecherche(villeChoisie)
    }

    // NOUVEAU : personnes de la ville recherchée
    const resultat = ListeP.filter((p) => p.ville === villeRecherche)
const ListeVilles = ['Rabat', 'Salé', 'Casablanca']
    return (
        <>
            <h2>Inscription</h2>
            <form onSubmit={ajouter}>
                <label htmlFor='nom'>nom :</label>
                <input type='text' required id='nom' value={nom} onChange={(e) => setNom(e.target.value)} /><br />

                <label htmlFor='prenom'>prénom :</label>
                <input type='text' required id='prenom' value={prenom} onChange={(e) => setPrenom(e.target.value)} /><br />

                <label htmlFor='age'>age :</label>
                <input type='number' required id='age' value={age} onChange={(e) => setAge(e.target.value)} /><br />

            
                <label htmlFor='email'>email :</label>
                <input type='email' required id='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />

                <button type='submit'>Ajouter</button>

               <label htmlFor='ville'>ville :</label>
<select required id='ville' value={ville} onChange={(e) => setVille(e.target.value)}>
    <option value=''>-- choisir une ville --</option>
    {ListeVilles.map((v, i) => <option key={i} value={v}>{v}</option>)}
</select><br />
            </form>

            <table style={{ border: "3px solid black", width: "800px" }}>
                <tbody>
                    <tr>
                        <td>index</td>
                        <td>nom</td>
                        <td>prénom</td>
                        <td>age</td>
                        <td>ville</td>
                        <td>email</td>
                        <td></td>
                    </tr>
                    {ListeP.map((p, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{p.nom}</td>
                            <td>{p.prenom}</td>
                            <td>{p.age}</td>
                            <td>{p.ville}</td>
                            <td>{p.email}</td>
                            <td><button onClick={() => supprimer(i)}>Supprimer</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* NOUVEAU : liste déroulante + bouton de recherche */}
            <h3>Recherche par ville</h3>
            <select value={villeChoisie} onChange={(e) => setVilleChoisie(e.target.value)}>
                <option value=''>-- choisir une ville --</option>
                {villes.map((v, i) => <option key={i} value={v}>{v}</option>)}
            </select>
            <button onClick={rechercher}>Rechercher</button>



            {/* NOUVEAU : résultat de la recherche */}
            {villeRecherche !== '' && (
                <table style={{ border: "3px solid black", width: "800px" }}>
                    <tbody>
                        <tr>
                            <td>nom</td>
                            <td>prénom</td>
                            <td>age</td>
                            <td>ville</td>
                            <td>email</td>
                        </tr>
                        {resultat.map((p, i) => (
                            <tr key={i}>
                                <td>{p.nom}</td>
                                <td>{p.prenom}</td>
                                <td>{p.age}</td>
                                <td>{p.ville}</td>
                                <td>{p.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )
}