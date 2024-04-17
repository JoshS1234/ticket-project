export type CV = {
  experience: string;
  department: string;
  techstack: string[];
  profilePicture: string;
};

export type Employee = {
  id: number;
  name: string;
  role: string;
  profile: CV;
};

export type TicketContainerProps = {
  team: Employee[];
};

export type EmployeeCardProps = {
  employee: Employee;
};
