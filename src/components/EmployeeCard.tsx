import { useState } from "react";
import { EmployeeCardProps } from "../types/type";
import "./EmployeeCard.scss";
import CounterDisplay from "./CounterDisplay.js";

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
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
      {/* {employee.profile.profilePicture && (
        <img src={employee.profile.profilePicture} alt="" />
      )} */}

      <p className="employee-card__employee-data">Role: {employee.role}</p>
      <p className="employee-card__employee-data">
        Experience: {employee.profile.experience}
      </p>
      <p className="employee-card__employee-data">
        Department: {employee.profile.department}
      </p>

      <CounterDisplay
        counter={counter}
        handleIncrementCounter={handleIncrementCounter}
        handleDecrementCounter={handleDecrementCounter}
      />
      <p>Tech stack: {employee.profile.techstack.join(", ")}</p>
    </div>
  );
};

export default EmployeeCard;
