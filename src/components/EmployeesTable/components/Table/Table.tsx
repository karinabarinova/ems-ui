import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { BsFillTrash3Fill } from "react-icons/bs";
import { ITEMS_PER_PAGE } from "utils/constants";
import { TableContentProps } from "./Table.types";
import styles from "./Table.module.css";
import { formatDate, formatSalary } from "utils";
import Popup from "../Modal/Modal";

const TableContent: React.FC<TableContentProps> = ({
    employees,
    onDelete,
    currentPage,
}) => {
    const [show, setShow] = useState<boolean>(false);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | null>(
        null,
    );

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

    const handleOnClick = (id: number) => {
        setShow(true);
        setSelectedEmployeeId(id);
    };

    const handleHideModal = () => {
        setShow(false);
    };

    const handleConfirmDeletion = () => {
        if (selectedEmployeeId !== null) {
            onDelete(selectedEmployeeId);
        }
        setShow(false);
    };

    return (
        <>
            <Popup
                show={show}
                onProceed={handleConfirmDeletion}
                onHide={handleHideModal}
            />
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
                                <td className="d-flex justify-content-center align-items-center">
                                    <Button
                                        variant="outline-danger"
                                        aria-label="Delete Employee"
                                        onClick={() => handleOnClick(id)}>
                                        <BsFillTrash3Fill />
                                    </Button>
                                </td>
                            </tr>
                        ),
                    )}
                </tbody>
            </Table>
        </>
    );
};

export default TableContent;
