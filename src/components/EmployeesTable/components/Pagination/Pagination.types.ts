export interface TablePaginationProps {
    handlePageChange: (pageNumber: number) => void;
    currentPage: number;
    totalPages: number;
}
