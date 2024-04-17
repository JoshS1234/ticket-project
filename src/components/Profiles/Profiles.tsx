import TicketContainer from "../../containers/TicketContainer";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./Profiles.scss";
import { useLocation } from "react-router-dom";

const Profiles = () => {
  const location = useLocation();
  let employee;
  if (location) {
    if (location.state) {
      employee = location.state.employee;
    }
  }
  return employee ? (
    <TicketContainer team={[employee]} />
  ) : (
    <div className="profile-page">Profiles</div>
  );
};

export default Profiles;
