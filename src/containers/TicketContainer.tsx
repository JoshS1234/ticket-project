import { FormEvent, useEffect, useState } from "react";
import EmployeeCard from "../components/EmployeeCard/EmployeeCard";
import { Employee, TicketContainerProps } from "../types/type";
import "./ticketContainer.scss";

const TicketContainer = ({ team }: TicketContainerProps) => {
  const [allJobs, setAllJobs] = useState<string[]>([]);
  const [teamState, setTeamState] = useState<Employee[]>(team);

  useEffect(() => {
    team.forEach((teamMember) => {
      if (!allJobs.includes(teamMember.role)) {
        setAllJobs([...allJobs, teamMember.role]);
      }
    });
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const targetName = e.currentTarget[0] as HTMLInputElement;
    const targetJob = e.currentTarget[1] as HTMLInputElement;

    const name = targetName.value.toLowerCase();
    const job = targetJob.value.toLowerCase();

    let filteredTeam = team.filter((teamMember) => {
      return teamMember.name.toLowerCase().includes(name);
    });
    if (job !== "") {
      filteredTeam = filteredTeam.filter((teamMember) => {
        return teamMember.role == job;
      });
    }
    e.currentTarget.reset();
    setTeamState(filteredTeam);
  };

  const handleReset = (e: FormEvent<HTMLFormElement>) => {
    e.currentTarget.reset();
    setTeamState(team);
  };

  return (
    <div className="ticket-container-body">
      <form
        className="filter-bar"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <div>
          <label htmlFor="searchByName" className="filter-bar__textbox-label">
            Search by name
          </label>
          <input type="text" name="searchByName"></input>
        </div>
        <div>
          {allJobs && (
            <>
              <label
                htmlFor="searchByRole"
                className="filter-bar__textbox-label"
              >
                Search by role
              </label>
              <select name="job" id="jobs">
                <option value=""></option>
                {allJobs.map((job) => {
                  return (
                    <option key={job} value={job}>
                      {job}
                    </option>
                  );
                })}
              </select>
            </>
          )}
        </div>
        <div>
          <button type="submit">Search</button>
          <button type="reset">Reset</button>
        </div>
      </form>
      <div className="ticket-container">
        {teamState.map((employee: Employee) => {
          return <EmployeeCard key={employee.id} employee={employee} />;
        })}
      </div>
    </div>
  );
};

export default TicketContainer;
