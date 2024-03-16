import usePagination from "hooks/usePagination";
import { ITEMS_PER_PAGE } from "utils/constants";
import TablePagination from "./components/Pagination/Pagination";
import TableContent from "./components/Table/Table";
import { EmployeesTableProps } from "./EmployeesTable.types";

const EmployeesTable = ({ employees, onDelete }: EmployeesTableProps) => {
  const { currentPage, totalPages, firstIndex, lastIndex, handlePageChange } =
    usePagination(employees.length, ITEMS_PER_PAGE);

  const employeeRows = employees.slice(firstIndex, lastIndex);

  return (
    <>
      <TableContent
        employees={employeeRows}
        onDelete={onDelete}
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
