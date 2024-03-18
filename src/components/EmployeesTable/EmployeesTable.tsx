import React, { useContext } from "react";
import Spinner from "react-bootstrap/Spinner";
import TablePagination from "./components/Pagination/Pagination";
import TableContent from "./components/Table/Table";
import Container from "react-bootstrap/Container";
import { EmployeesTableProps } from "./EmployeesTable.types";
import { EmployeesDataContext } from "context/employeesDataContext";

const EmployeesTable: React.FC<EmployeesTableProps> = ({ employees }) => {
    const {
        currentPage,
        totalPages,
        firstIndex,
        lastIndex,
        loading,
        handlePageChange,
        deleteEmployee,
    } = useContext(EmployeesDataContext);

    const employeeRows = employees.slice(firstIndex, lastIndex);

    if (loading) {
        return (
            <Container
                fluid
                className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="secondary" />
            </Container>
        );
    }

    return (
        <Container fluid className="p-0">
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
        </Container>
    );
};

export default EmployeesTable;
