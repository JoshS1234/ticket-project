import "./App.scss";
import TicketContainer from "./containers/TicketContainer";
import team from "./data/team";
import { Route, Routes, Outlet, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Profiles from "./components/Profiles/Profiles";
import NoPage from "./components/NoPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Outlet />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="*" element={<NoPage />} />
          <Route
            path="/tickets"
            element={<TicketContainer team={team} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
