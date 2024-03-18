import {useEffect, useState} from "react";
import {EMPLOYEES_ENDPOINT} from "utils/constants";
import {Employee} from "components/EmployeesTable/EmployeesTable.types";

export interface EmployeesData {
    employees: Employee[];
    selectedDepartment: string;
    setSelectedDepartment: React.Dispatch<React.SetStateAction<string>>;
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    deleteEmployee: (index: number) => void;
    createEmployee: (employee: Employee) => void;
    loading: boolean;
}

export const useEmployeesData = (): EmployeesData => {
    const [loading, setLoading] = useState<boolean>(true);
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [selectedDepartment, setSelectedDepartment] = useState<string>("");
    const [searchValue, setSearchValue] = useState<string>("");

    useEffect(() => {
        fetchEmployees();
    }, []);

    const deleteEmployee = async (employeeId: number) => {
        try {
            const response = await fetch(
                `${EMPLOYEES_ENDPOINT}/${employeeId}`,
                {
                    method: "DELETE",
                },
            );
            if (!response.ok) {
                throw new Error("Failed to delete an employees");
            }
            const updatedEmployees = employees.filter(
                ({id}) => id !== employeeId,
            );
            setEmployees(updatedEmployees);
        } catch (error) {
            console.error(error);
        }
    };

    const createEmployee = async (employee: Employee) => {
        try {
            const response = await fetch(EMPLOYEES_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(employee),
            });

            if (!response.ok) {
                throw new Error("Failed to create an employees");
            }

            setEmployees(oldEmployees => [...oldEmployees, employee]);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchEmployees = async () => {
        try {
            setLoading(true);
            const response = await fetch(EMPLOYEES_ENDPOINT);
            if (!response.ok) {
                throw new Error("Failed to fetch employees");
            }
            const data: Employee[] = await response.json();
            setEmployees(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    return {
        employees,
        selectedDepartment,
        setSelectedDepartment,
        searchValue,
        setSearchValue,
        deleteEmployee,
        createEmployee,
        loading,
    };
};
