import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FilterEmployees from "components/Filter/FilterEmployees";
import EmployeesTable from "components/EmployeesTable/EmployeesTable";
import Search from "components/Search/Search";
import { EmployeesDataContext } from "context/employeesDataContext";

const Home: React.FC = () => {
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
        <Container fluid className="g-0 px-3 px-md-5">
            <Row className="d-flex flex-sm-row flex-column justify-content-around gap-3 gap-md-0 my-5 px-3">
                <Col xs={12} md={8} className="p-0 m-0">
                    <Search setSearchValue={setSearchValue} />
                </Col>
                <Col xs={12} md={4} className="p-0 m-0">
                    <FilterEmployees
                        selectedDepartment={selectedDepartment}
                        handleDepartmentChoice={handleDepartmentChoice}
                        departments={departments}
                    />
                </Col>
            </Row>
            <EmployeesTable employees={currentEmployeesList} />
        </Container>
    );
};

export default Home;
