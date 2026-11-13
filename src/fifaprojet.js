function PlayerCard(props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px", borderRadius: "15px", width: "200px", textAlign: "center", background: "white" }}>
      <img src={props.photo} alt={props.name} style={{ width: "120px" }} />
      <h2>{props.name}</h2>
      <p>Rating: {props.rating}</p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>FIFA Team dyali</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <PlayerCard name="Mbappe" rating={91} photo="mbappe.png" />
        <PlayerCard name="Hakimi" rating={84} photo="https://cdn.sofifa.net/players/192/448/25_120.png" />
        <PlayerCard name="Bellingham" rating={90} photo="https://cdn.sofifa.net/players/252/371/25_120.png" />
      </div>
    </div>
  );
}

export default App;