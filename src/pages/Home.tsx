import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import FilterEmployees from "components/Filter/FilterEmployees";
import EmployeesTable from "components/EmployeesTable/EmployeesTable";
import Search from "components/Search/Search";
import { EmployeesDataContext } from "context/employeesDataContext";

const Home = () => {
    const {
        selectedDepartment,
        setSelectedDepartment,
        setSearchValue,
        departments,
        currentEmployeesList,
        handlePageChange,
    } = useContext(EmployeesDataContext);

    const handleDepartmentChoice = (value: string) => {
        handlePageChange(1);
        setSelectedDepartment(value);
    };

    return (
        <Container fluid className="g-0 px-5">
            <Container className="d-flex flex-sm-row flex-column justify-content-between gap-3 my-5 m-0 p-0">
                <Search setSearchValue={setSearchValue} />
                <FilterEmployees
                    selectedDepartment={selectedDepartment}
                    handleDepartmentChoice={handleDepartmentChoice}
                    departments={departments}
                />
            </Container>
            <EmployeesTable employees={currentEmployeesList} />
        </Container>
    );
};

export default Home;
