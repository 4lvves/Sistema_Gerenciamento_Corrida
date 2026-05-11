function ParticipantCard({ participant }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px"
      }}
    >
      <h3>{participant.nome}</h3>
      <p>Idade: {participant.idade}</p>
      <p>Categoria: {participant.categoria}</p>
      <p>Status: {participant.statusInscricao}</p>
    </div>
  );
}

export default ParticipantCard;