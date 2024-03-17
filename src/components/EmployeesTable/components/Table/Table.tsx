import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { ITEMS_PER_PAGE } from "utils/constants";
import { TableContentProps } from "./Table.types";

const TableContent: React.FC<TableContentProps> = ({
    employees,
    onDelete,
    currentPage,
}) => {
    const tableColumns = [
        "#",
        "Name",
        "Email",
        "Position",
        "Department",
        "Salary",
        "Start Date",
        "Actions",
    ];

    const calculateRowNumber = (currentPage: number, index: number) => {
        // Calculate the row number based on the current page, index, and items per page
        return (currentPage - 1) * ITEMS_PER_PAGE + index + 1;
    };

    return (
        <Table striped bordered hover responsive className="noWrap">
            <thead>
                <tr>
                    {tableColumns.map(column => (
                        <th key={column} scope="col">
                            {column}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {employees?.map(
                    (
                        {
                            name,
                            email,
                            position,
                            department,
                            salary,
                            startDate,
                        },
                        index,
                    ) => (
                        <tr key={`${email}-${index}`}>
                            <th scope="row">
                                {calculateRowNumber(currentPage, index)}
                            </th>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{position}</td>
                            <td>{department}</td>
                            <td>{salary}</td>
                            <td>{new Date(startDate).toDateString()}</td>
                            <td>
                                <Button
                                    variant="outline-danger"
                                    onClick={() => onDelete(email)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ),
                )}
            </tbody>
        </Table>
    );
};

export default TableContent;
