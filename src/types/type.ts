export type Employee = {
  id: number;
  name: string;
  role: string;
};

export type TicketContainerProps = {
  team: Employee[];
};

export type EmployeeCardProps = {
  employee: Employee;
};
