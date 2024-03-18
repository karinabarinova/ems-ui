import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { TablePaginationProps } from "./Pagination.types";
import styles from "./Pagination.module.css";

const TablePagination: React.FC<TablePaginationProps> = ({
    handlePageChange,
    currentPage,
    totalPages,
}) => {
    return (
        <Pagination className="d-flex justify-content-center align-items-center">
            <Pagination.First
                className={styles.paginationButton}
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
            />
            <Pagination.Prev
                className={styles.paginationButton}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            />
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <Pagination.Next
                className={styles.paginationButton}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            />
            <Pagination.Last
                className={styles.paginationButton}
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(totalPages)}
            />
        </Pagination>
    );
};

export default TablePagination;
