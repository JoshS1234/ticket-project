import "./App.scss";
import TicketContainer from "./components/TicketContainer";
import team from "./data/team";

function App() {
  console.log(team);
  return (
    <div>
      <h1>Ticket project</h1>
      <TicketContainer team={team} />
    </div>
  );
}

export default App;
