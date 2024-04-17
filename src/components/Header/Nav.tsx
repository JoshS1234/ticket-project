import { Link, Outlet } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-bar__link">
        Home
      </Link>
      <Link to="/tickets" className="nav-bar__link">
        Ticketing
      </Link>
      <Link to="/profiles" className="nav-bar__link">
        Profiles
      </Link>
    </nav>
  );
};

export default Nav;
