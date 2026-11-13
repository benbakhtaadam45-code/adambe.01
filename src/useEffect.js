import { useState, useEffect } from "react";

export default function ToutesLesCas() {
  const [nom, setNom] = useState("candidat");
  const [prenom, setPrenom] = useState("stagiaire");
  const [secondes, setSecondes] = useState(0);
  const [users, setUsers] = useState([]);

  // 1. Sans tableau : après CHAQUE rendu
  useEffect(() => {
    console.log("Cas 1 : un rendu vient d'avoir lieu");
  });

  // 2. Tableau vide [] : UNE SEULE fois (chargement)
  useEffect(() => {
    console.log("Cas 2 : premier affichage seulement");
  }, []);

  // 3. Avec dépendance [prenom] : au chargement + quand prenom change
  
  useEffect(() => {
    document.title = prenom;
    console.log("Cas 3 : prenom a changé =>", prenom);
  }, [prenom]);

  // 4. Plusieurs dépendances [nom, prenom]
  useEffect(() => {
    console.log("Cas 4 : nom ou prenom a changé =>", nom, prenom);
  }, [nom, prenom]);

  // 5. Avec nettoyage (cleanup) : minuteur
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondes((s) => s + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Cas 5 : nettoyage, minuteur arrêté");
    };
  }, []);

  // 6. Appel API (cas de ton examen)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Erreur API :", err));
  }, []);

  return (
    <div>
      <h1>bonjour {nom} {prenom}</h1>

      nom: <input type="text" onChange={(e) => setNom(e.target.value)} /> <br />
      prenom: <input type="text" onChange={(e) => setPrenom(e.target.value)} />

      <p>Secondes écoulées : {secondes}</p>

      <h3>Utilisateurs (API) :</h3>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
/*
1	بلا tableau	بعد كل rendu (حتى ملي الثانية تزيد)
2	[]	مرة وحدة عند الفتح
3	[prenom]	عند الفتح + ملي prenom يتبدل
4	[nom, prenom]	عند الفتح + ملي واحد من الجوج يتبدل
5	return () => ...	cleanup: كيتدار ملي الكومبوننت كيتحيد
6	*/



//kayt-exécuta men ba3d ma page tban, w kaydir 3amal (console, title, API).