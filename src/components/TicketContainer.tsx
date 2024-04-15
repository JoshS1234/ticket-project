import React from "react";
import TeamCard from "./TeamCard";

const TicketContainer = ({ team }) => {
  return (
    <div className="ticket-container">
      {team.map((teamMember) => {
        return <TeamCard teamMember={teamMember} />;
      })}
    </div>
  );
};

export default TicketContainer;
