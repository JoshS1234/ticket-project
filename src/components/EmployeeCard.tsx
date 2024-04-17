import { useState } from "react";
import { EmployeeCardProps } from "../types/type";
import "./EmployeeCard.scss";
import CounterDisplay from "./CounterDisplay.js";

const TeamCard = ({ employee }: EmployeeCardProps) => {
  const [counter, setCounter] = useState<number>(0);
  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  };
  const handleDecrementCounter = () => {
    if (counter != 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="employee-card">
      <p className="employee-card__employee-data">Name: {employee.name}</p>
      <p className="employee-card__employee-data">Role: {employee.role}</p>
      <CounterDisplay
        counter={counter}
        handleIncrementCounter={handleIncrementCounter}
        handleDecrementCounter={handleDecrementCounter}
      />
    </div>
  );
};

export default TeamCard;
