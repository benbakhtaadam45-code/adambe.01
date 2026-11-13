/*Tbi9 3la l’examen (MainForm)

Qra l’énoncé, w ktb 3la kol exigence chno khassek:

Li matlob f l’énoncé	                        So2al(li ghnswl rsi)	                      Hook
Formulaire (sexe, âge, poids, taille, niveau)	Valeurs katbddel	          useState
Messages d’erreur	                            Valeur katbddel  	          useState
Consommation d’API	                            3amal men ba3d affichage	  useEffect
Liste d’activités f Redux	                    Nqra men Redux	              useSelector
Mise à jour des résultats dans Redux	        Nsift action	              useDispatch
Aller l /summary men ba3d calcul             	Nbddel page	                  useNavigate*/

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MainForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activities = useSelector((state) => state.activities);

  const [sexe, setSexe] = useState("");
  const [age, setAge] = useState("");
  const [poids, setPoids] = useState("");
  const [taille, setTaille] = useState("");
  const [niveauAct, setNiveauAct] = useState("");
  const [error, setError] = useState({});

  useEffect(() => {
    fetch("https://jsonofppt.bmrregional.com/utilisateurs")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SET_ACTIVITY_LEVELS", payload: data });
      })
      .catch((err) => console.error("Erreur API :", err));
  }, [dispatch]);

  const valider = () => {
    const e = {};
    if (!sexe) e.sexe = "Veuillez sélectionner votre sexe";
    if (!age || age <= 0) e.age = "Veuillez entrer un âge valide";
    if (!poids || poids <= 0) e.poids = "Veuillez entrer un poids valide";
    if (!taille || taille <= 0) e.taille = "Veuillez entrer une taille valide";
    if (!niveauAct) e.niveauAct = "Veuillez sélectionner un niveau d'activité";
    setError(e);
    return Object.keys(e).length === 0;
  };

  const calculer = (ev) => {
    ev.preventDefault();
    if (!valider()) return;

    const p = parseFloat(poids);
    const t = parseFloat(taille);
    const a = parseFloat(age);

    const base = 10 * p + 6.25 * t - 5 * a;
    const bmr = sexe === "homme" ? base + 5 : base - 161;

    const activite = activities.find((x) => x.id === parseInt(niveauAct));
    if (!activite) return;

    const tdee = bmr * activite.factor;

    dispatch({ type: "SET_BMR", payload: bmr });
    dispatch({ type: "SET_TDEE", payload: tdee });

    navigate("/summary");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Formulaire Principal</h2>
      <form onSubmit={calculer}>
        <label>Sexe :</label>
        <div>
          <button type="button" onClick={() => setSexe("homme")}
            style={{ background: sexe === "homme" ? "#333" : "#777" }}>
            <img src="/images/homme.png" alt="Homme" width="40" /><br />Homme
          </button>
          <button type="button" onClick={() => setSexe("femme")}
            style={{ background: sexe === "femme" ? "#333" : "#777" }}>
            <img src="/images/femme.png" alt="Femme" width="40" /><br />Femme
          </button>
        </div>
        {error.sexe && <small style={{ color: "red" }}>{error.sexe}</small>}

        <div>
          <label>Âge :</label><br />
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          {error.age && <div><small style={{ color: "red" }}>{error.age}</small></div>}
        </div>

        <div>
          <label>Poids (kg) :</label><br />
          <input type="number" value={poids} onChange={(e) => setPoids(e.target.value)} />
          {error.poids && <div><small style={{ color: "red" }}>{error.poids}</small></div>}
        </div>

        <div>
          <label>Taille (cm) :</label><br />
          <input type="number" value={taille} onChange={(e) => setTaille(e.target.value)} />
          {error.taille && <div><small style={{ color: "red" }}>{error.taille}</small></div>}
        </div>

        <div>
          <label>Niveau d'Activité :</label><br />
          <select value={niveauAct} onChange={(e) => setNiveauAct(e.target.value)}>
            <option value="">-- Sélectionnez --</option>
            {activities.map((a) => (
              <option key={a.id} value={a.id}>{a.name}</option>
            ))}
          </select>
          {error.niveauAct && <div><small style={{ color: "red" }}>{error.niveauAct}</small></div>}
        </div>

        <button type="submit">Calculer</button>
      </form>
    </div>
  );
}