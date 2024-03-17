import { useState, useMemo } from "react";

/**
 * Custom hook to handle pagination functionality
 * @param totalItems Total number of items
 * @param itemsPerPage Number of items per page
 * @returns Pagination state and functions
 */

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

    // Generate array of page numbers for pagination control
    const pageNumbers = useMemo(() => {
        return Array.from({ length: totalPages }, (_, index) => index + 1);
    }, [totalPages]);

    return {
        currentPage,
        totalPages,
        firstIndex,
        lastIndex,
        handlePageChange,
        pageNumbers,
    };
};

export default usePagination;
