import useTaches from "./useTaches";
import { Link } from "react-router-dom";

export default function TodoApi() {
    const listeT = useTaches();

    return (
        <>
            <h1>Liste des tâches</h1>
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
                    {listeT.map((t) => (
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

        </>

    );

}

/*Chno howa JSON?

Format dyal données bhal objet JavaScript:

json
{ "nom": "Adam", "age": 22 }*/