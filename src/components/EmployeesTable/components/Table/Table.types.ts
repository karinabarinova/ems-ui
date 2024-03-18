import {EmployeesTableProps} from "components/EmployeesTable/EmployeesTable.types";

export interface TableContentProps extends EmployeesTableProps {
    currentPage: number;
    onDelete: (id: number) => void;
}
