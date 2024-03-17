import React, { useContext } from "react";
import TablePagination from "./components/Pagination/Pagination";
import TableContent from "./components/Table/Table";
import { EmployeesTableProps } from "./EmployeesTable.types";
import { EmployeesDataContext } from "context/employeesDataContext";

const EmployeesTable: React.FC<EmployeesTableProps> = ({ employees }) => {
    const {
        currentPage,
        totalPages,
        firstIndex,
        lastIndex,
        handlePageChange,
        deleteEmployee,
    } = useContext(EmployeesDataContext);

    const employeeRows = employees.slice(firstIndex, lastIndex);

    return (
        <>
            <TableContent
                employees={employeeRows}
                onDelete={deleteEmployee}
                currentPage={currentPage}
            />
            <TablePagination
                handlePageChange={handlePageChange}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </>
    );
};

export default EmployeesTable;
