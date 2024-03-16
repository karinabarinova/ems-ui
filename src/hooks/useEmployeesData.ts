import { useEffect, useState } from "react";
import {
  GET_EMPLOYEES_ENDPOINT,
  DEPARTMENTS_KEY,
  EMPLOYEES_KEY,
} from "utils/constants";
import { Employee } from "components/EmployeesTable/EmployeesTable.types";

interface EmployeesData {
  employees: Employee[];
  selectedDepartment: string;
  setSelectedDepartment: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  deleteEmployee: (index: number) => void;
}

export const useEmployeesData = (): EmployeesData => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  console.log({ length: employees.length });
  const deleteEmployee = (index: number) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);

    // Update localStorage with the modified list of employees
    localStorage.setItem(EMPLOYEES_KEY, JSON.stringify(updatedEmployees));
    setEmployees(updatedEmployees);
  };

  const fetchEmployees = async () => {
    try {
      const localData = JSON.parse(localStorage.getItem(EMPLOYEES_KEY) || "[]");
      if (localData.length !== 0) {
        setEmployees(localData);
      } else {
        const response = await fetch(GET_EMPLOYEES_ENDPOINT);
        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }
        const data: Employee[] = await response.json();
        const uniqueDepartments: Set<string> = new Set(
          data.map(employee => employee.department),
        );
        localStorage.setItem(
          DEPARTMENTS_KEY,
          JSON.stringify(Array.from(uniqueDepartments)),
        );
        localStorage.setItem(EMPLOYEES_KEY, JSON.stringify(data));
        setEmployees(data);
      }
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
  };
};
