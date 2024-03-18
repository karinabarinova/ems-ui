import React, { createContext, ReactNode, useMemo } from "react";
import { EmployeesData, useEmployeesData } from "hooks/useEmployeesData";
import usePagination, { Pagination } from "hooks/usePagination";
import { ITEMS_PER_PAGE } from "utils/constants";
import { Employee } from "components/EmployeesTable/EmployeesTable.types";

type EmployeesDataContextType = EmployeesData &
    Pagination & {
        departments: string[];
        currentEmployeesList: Employee[];
    };

export const EmployeesDataContext = createContext<EmployeesDataContextType>(
    {} as EmployeesDataContextType,
);

interface EmployeesDataContextProviderProps {
    children: ReactNode;
}

const EmployeesDataContextProvider = ({
    children,
}: EmployeesDataContextProviderProps) => {
    const {
        createEmployee,
        deleteEmployee,
        employees,
        searchValue,
        setSearchValue,
        selectedDepartment,
        setSelectedDepartment,
        loading,
    } = useEmployeesData();

    // Filter employees based on selected department, search value, or both
    const currentEmployeesList = useMemo(() => {
        return employees.filter(employee => {
            const matchesDepartment =
                !selectedDepartment ||
                employee.department === selectedDepartment;
            const matchesSearch =
                !searchValue ||
                employee.name.toLowerCase().includes(searchValue.toLowerCase());
            return matchesDepartment && matchesSearch;
        });
    }, [employees, selectedDepartment, searchValue]);

    const { currentPage, totalPages, firstIndex, lastIndex, handlePageChange } =
        usePagination(currentEmployeesList.length, ITEMS_PER_PAGE);

    const getUniqueDepartments = () => {
        const departments = employees.map(employee => employee.department);
        const uniqueDepartments = Array.from(new Set(departments));
        return uniqueDepartments;
    };

    const departments = getUniqueDepartments();

    return (
        <EmployeesDataContext.Provider
            value={{
                createEmployee,
                deleteEmployee,
                employees,
                searchValue,
                setSearchValue,
                selectedDepartment,
                setSelectedDepartment,
                loading,
                currentPage,
                totalPages,
                firstIndex,
                lastIndex,
                handlePageChange,
                departments,
                currentEmployeesList,
            }}>
            {children}
        </EmployeesDataContext.Provider>
    );
};

export default EmployeesDataContextProvider;
