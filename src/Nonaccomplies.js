import useTaches from "./useTaches";
import { Link } from "react-router-dom";

export default function D() {
  const X = useTaches(); // toutes les taches
  const T = X.filter((t) => t.completed = false); // taches non accomplies

  return (
    <>
      <h1>liste des tâches non accomplies</h1>
      {T ? (
        <table border="1">
          <thead>
            <tr>
              <th>userId</th>
              <th>id</th>
              <th>title</th>
              <th>completed</th>
            </tr>
          </thead>
          <tbody>
            {T.map((t) => (
              <tr key={t.id}>
                <td>{t.userId}</td>
                <td>{t.id}</td>
                <td>
                  <Link to={`/${t.id}`}>{t.title}</Link>
                </td>
                {t.completed ? (
                  <td style={{ backgroundColor: "pink" }}>oui</td>
                ) : (
                  <td style={{ backgroundColor: "yellow" }}>non</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>chargement ...</h2>
      )}
    </>
  );
}