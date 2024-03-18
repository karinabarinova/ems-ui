import React from "react";
import { Table, Button } from "react-bootstrap";
import { BsFillTrash3Fill } from "react-icons/bs";
import { ITEMS_PER_PAGE } from "utils/constants";
import { TableContentProps } from "./Table.types";
import styles from "./Table.module.css";
import { formatDate, formatSalary } from "utils";

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
        <Table striped bordered hover responsive className={styles.noWrap}>
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
                            id,
                            name,
                            email,
                            position,
                            department,
                            salary,
                            startDate,
                        },
                        index,
                    ) => (
                        <tr key={id}>
                            <th scope="row">
                                {calculateRowNumber(currentPage, index)}
                            </th>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{position}</td>
                            <td>{department}</td>
                            <td>{formatSalary(salary)}</td>
                            <td>{formatDate(startDate)}</td>
                            <td>
                                <Button
                                    variant="outline-danger"
                                    onClick={() => onDelete(id)}>
                                    <BsFillTrash3Fill />
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
