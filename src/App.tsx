import "./App.scss";
import TicketContainer from "./containers/TicketContainer";
import team from "./data/team";

function App() {
  return (
    <div className="app">
      <h1 className="app__header">Ticket project</h1>
      <TicketContainer team={team} />
    </div>
  );
}

export default App;
