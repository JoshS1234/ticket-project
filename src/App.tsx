import "./App.scss";
import TicketContainer from "./containers/TicketContainer";
import team from "./data/team";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Outlet />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/tickets" element={<TicketContainer team={team} />}>
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
