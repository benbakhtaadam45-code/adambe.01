import { useState } from "react";

export default function Formulaire() {
  const [nom, setNom] = useState("");
  const [ville, setVille] = useState("Rabat");
  const [etudiant, setEtudiant] = useState(false);
  const [age, setAge] = useState("");
  const [envoye, setEnvoye] = useState(false);
  const [erreur, setErreur] = useState(false);
  const [compteur, setCompteur] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (nom === "") {
      setErreur(true);
      setEnvoye(false);
    } else {
      setErreur(false);
      setEnvoye(true);
    }
  };
  const handleReset = () => {
    setNom("");
    setVille("Rabat");
    setAge("");
    setEtudiant(false);
    setCompteur(0);
    setEnvoye(false);
    setErreur(false);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        <select value={ville} onChange={(e) => setVille(e.target.value)}>
          <option value="Rabat">Rabat</option>
          <option value="Salé">Salé</option>
          <option value="Casablanca">Casablanca</option>
        </select> <br></br>
        <input
          type="number"
          placeholder="Âge"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        /> <br></br>
        <input
          type="number"
          placeholder="Âge"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={etudiant}
            onChange={(e) => setEtudiant(e.target.checked)}
          />
          Je suis étudiant
        </label>

        {/* Compteur */}
        <div>
          <p style={{ color: compteur === 0 ? "red" : "green" }}>
            Nombre d'invités: {compteur}
          </p>

          <button
            type="button"
            onClick={() => setCompteur(compteur + 1)}
            disabled={compteur === 10}
          >
            +
          </button>

          <button
            type="button"
            onClick={() => setCompteur(compteur - 1)}
            disabled={compteur === 0}
          >
            -
          </button>

          <button type="button" onClick={() => setCompteur(0)}>
            Reset
          </button>
        </div>
        <p style={{ color: compteur === 0 ? "red" : "green" }}>
          Nombre d'invités: {compteur}
        </p>

        <button type="submit">Valider</button>
        <button type="button" onClick={handleReset}>
          Réinitialiser
        </button>

      </form>

      {erreur && <p style={{ color: "red" }}>Entrez votre nom</p>}

      {envoye && (
        <div>
          <p>Nom: {nom}</p>
          <p>Ville: {ville}</p>
          <p>Étudiant: {etudiant ? "Oui" : "Non"}</p>
          <p>Âge: {age}</p>


        </div>
      )}
    </div>
  );
}
