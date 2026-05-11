import { useState } from "react";
import RaceCard from "./components/RaceCard";
import ParticipantCard from "./components/ParticipantCard";

const races = [
  {
    id: 1,
    nome: "Corrida Noturna Curitiba",
    local: "Curitiba - PR",
    data: "2026-06-15",
    categoria: "5km"
  },
  {
    id: 2,
    nome: "Desafio das Araucárias",
    local: "Ponta Grossa - PR",
    data: "2026-07-10",
    categoria: "10km"
  },
  {
    id: 3,
    nome: "Maratona Universitária",
    local: "Londrina - PR",
    data: "2026-08-02",
    categoria: "21km"
  },
  {
    id: 4,
    nome: "Circuito Trail Paraná",
    local: "Maringá - PR",
    data: "2026-09-20",
    categoria: "5km"
  }
];

const participants = [
  {
    id: 1,
    nome: "Carlos Henrique",
    idade: 24,
    categoria: "5km",
    statusInscricao: "Confirmada"
  },
  {
    id: 2,
    nome: "Amanda Souza",
    idade: 29,
    categoria: "10km",
    statusInscricao: "Pendente"
  },
  {
    id: 3,
    nome: "Lucas Martins",
    idade: 31,
    categoria: "21km",
    statusInscricao: "Confirmada"
  },
  {
    id: 4,
    nome: "Fernanda Lima",
    idade: 22,
    categoria: "5km",
    statusInscricao: "Confirmada"
  }
];

function App() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Inscrição realizada com sucesso!");
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Sistema de Gerenciamento de Corridas</h1>

      <h2>Corridas</h2>

      {races.map((race) => (
  <RaceCard key={race.id} race={race} />
))}

      <h2>Participantes</h2>

      {participants.map((participant) => (
  <ParticipantCard
    key={participant.id}
    participant={participant}
  />
))}

      <h2>Nova Inscrição</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do participante"
          required
        />

        <br />
        <br />

        <select required>
          <option value="">Selecione a categoria</option>
          <option value="5km">5km</option>
          <option value="10km">10km</option>
          <option value="21km">21km</option>
        </select>

        <br />
        <br />

        <button type="submit">Inscrever</button>
      </form>

      {message && (
        <p style={{ color: "green", marginTop: "10px" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default App;