export interface EmployeesTableProps {
    employees: Employee[];
    onDelete: (value: string) => void;
}
export interface Employee {
    name: string;
    email: string;
    position: string;
    department: string;
    salary: number;
    startDate: string;
}
