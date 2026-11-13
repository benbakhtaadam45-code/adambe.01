export default function Evenement(props) {
  const data = props;
  return (
    <tr>
      <th>{data.id}</th>
      <th>{data.description}</th>
      <th>{data.lieu}</th>
      <th>{data.datedebut}</th>
      <th>{data.duree}</th>
    </tr>
  );
}