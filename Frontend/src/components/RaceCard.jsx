function RaceCard({ race }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px"
      }}
    >
      <h3>{race.nome}</h3>
      <p>Local: {race.local}</p>
      <p>Data: {race.data}</p>
      <p>Categoria: {race.categoria}</p>
    </div>
  );
}

export default RaceCard;