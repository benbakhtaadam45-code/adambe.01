import React from "react";

function Evenement({ evenement }) {
  return (
    <tr>
      <td>{evenement.id}</td>
      <td>{evenement.description}</td>
      <td>{evenement.lieu}</td>
      <td>{evenement.dateDébut}</td>
      <td>{evenement.durée}</td>
    </tr>
  );
}

export default Evenement;