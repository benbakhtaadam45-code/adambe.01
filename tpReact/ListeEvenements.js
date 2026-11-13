import EvenementData from "./EvenementData";
import Evenement from "./Evenement";
export default function ListeEvenements() {
  return (
    <table
      style={{
        background: 'grey',
        color: 'white',
        border: '1px solid black',
        textAlign: 'center',
        margin: '50px',
        padding: '10px'
      }}
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>lieu</th>
          <th>Date début</th>
          <th>Durée</th>
        </tr>
      </thead>
      <tbody>
        {EvenementData.map((e) => (
          <Evenement
            id={e.id}
            description={e.description}
            lieu = {e.lieu}
            datedebut={e.datedebut}
            duree={e.duree}
          />
        ))}
      </tbody>
    </table>
  );
}