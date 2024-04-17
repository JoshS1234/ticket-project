import Nav from "./Nav";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Ticket project</h1>
      <Nav />
    </div>
  );
};

export default Header;
