import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { DEPARTMENTS_KEY } from "utils/constants";
import styles from "./FilterEmployees.module.css";
import { FilterEmployeesProps } from "./FilterEmployees.types";

const DROPDOWN_HEADER_TITLE = "Filter by Department";

const FilterEmployees: React.FC<FilterEmployeesProps> = ({
    selectedDepartment,
    handleDepartmentChoice,
}) => {
    const departments: string[] = JSON.parse(
        localStorage.getItem(DEPARTMENTS_KEY) || "[]",
    );
    const title = selectedDepartment || DROPDOWN_HEADER_TITLE;
    const isResetDisabled = !selectedDepartment;

    const onDepartmentChange = (value: string | null) => {
        handleDepartmentChoice(value || "");
    };

    return (
        <DropdownButton
            title={title}
            onSelect={onDepartmentChange}
            variant="secondary"
            className={`${styles.scrollableDropdown} col-3`}
            menuVariant="dark">
            <Dropdown.Item
                className="font-weight-bold"
                disabled={isResetDisabled}
                as={"button"}>
                Reset Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            {departments.map(value => (
                <Dropdown.Item key={value} className="my-1" eventKey={value}>
                    {value}
                </Dropdown.Item>
            ))}
        </DropdownButton>
    );
};

export default FilterEmployees;
