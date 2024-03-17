import { useState, useMemo } from "react";

/**
 * Custom hook to handle pagination functionality
 * @param totalItems Total number of items
 * @param itemsPerPage Number of items per page
 * @returns Pagination state and functions
 */

export interface Pagination {
    currentPage: number;
    totalPages: number;
    firstIndex: number;
    lastIndex: number;
    handlePageChange: (pageNumber: number) => void;
}

const usePagination = (totalItems: number, itemsPerPage: number) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total number of pages
    const totalPages = useMemo(
        () => Math.ceil(totalItems / itemsPerPage),
        [totalItems, itemsPerPage],
    );

    // Calculate index of the last item on the current page
    const lastIndex = currentPage * itemsPerPage;

    // Calculate index of the first item on the current page
    const firstIndex = lastIndex - itemsPerPage;

    // Handle page change
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return {
        currentPage,
        totalPages,
        firstIndex,
        lastIndex,
        handlePageChange,
    };
};

export default usePagination;
