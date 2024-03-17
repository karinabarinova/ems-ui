export interface EmployeesTableProps {
    employees: Employee[];
}
export interface Employee {
    id: number;
    name: string;
    email: string;
    position: string;
    department: string;
    salary: number;
    startDate: string;
}
