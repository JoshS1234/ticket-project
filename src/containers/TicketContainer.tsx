import TeamCard from "../components/EmployeeCard";
import { Employee, TicketContainerProps } from "../types/type";
import "./ticketContainer.scss";

const TicketContainer = ({ team }: TicketContainerProps) => {
  console.log(team);
  return (
    <div className="ticket-container">
      {team.map((employee: Employee) => {
        return <TeamCard key={employee.id} employee={employee} />;
      })}
    </div>
  );
};

export default TicketContainer;
