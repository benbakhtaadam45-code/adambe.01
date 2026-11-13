import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DetailsTache() {
  const { id } = useParams();
  const [tache, setTache] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((res) => setTache(res.data));
  }, [id]);

  if (!tache) return <h2>chargement ...</h2>;

  return (
    <>
      <h2>Tâche id :{tache.id}</h2>
      <h3>{tache.title}</h3>
      <h3>
        completed : <input type="checkbox" checked={tache.completed} readOnly />
      </h3>
    </>
  );
}