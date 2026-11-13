import React from "react";
import ReactDOM from "react-dom/client";
import Evenement from "./tp3";
import Liste from "./tp4";

function ListeEvenements({ liste }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Lieu</th>
          <th>Date début</th>
          <th>Durée</th>
        </tr>
      </thead>
      <tbody>
        {liste.map((e) => (
          <Evenement key={e.id} evenement={e} />
        ))}
      </tbody>
    </table>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ListeEvenements liste={Liste} />);