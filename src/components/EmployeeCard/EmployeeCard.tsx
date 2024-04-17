import { useState } from "react";
import { EmployeeCardProps } from "../../types/type.js";
import "./EmployeeCard.scss";
import CounterDisplay from "./CounterDisplay.js";
import { Link } from "react-router-dom";

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
      <div className="employee-card__employee-data-container">
        <div className="employee-card__header-content">
          <h2 className="employee-card__employee-data-header">
            {employee.name}
          </h2>
          <button>
            <Link to="/profiles" state={{ employee: employee }}>
              Profile
            </Link>
          </button>
        </div>

        <h4 className="employee-card__employee-data-sub-header">
          {employee.role}
        </h4>
        <p className="employee-card__employee-data">
          Experience: {employee.profile.experience}
        </p>
        <p className="employee-card__employee-data">
          Department: {employee.profile.department}
        </p>
        <p className="employee-card__employee-data">
          Tech stack: {employee.profile.techstack.join(", ")}
        </p>
      </div>

      <CounterDisplay
        counter={counter}
        handleIncrementCounter={handleIncrementCounter}
        handleDecrementCounter={handleDecrementCounter}
      />
    </div>
  );
};

export default EmployeeCard;
