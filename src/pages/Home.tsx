import React from "react";
import Container from "react-bootstrap/Container";
import FilterEmployees from "components/Filter/FilterEmployees";
import EmployeesTable from "components/EmployeesTable/EmployeesTable";
import { useEmployeesData } from "hooks/useEmployeesData";
import { useMemo } from "react";
import Search from "components/Search/Search";

const Home = () => {
  const {
    employees,
    selectedDepartment,
    setSelectedDepartment,
    searchValue,
    setSearchValue,
    deleteEmployee,
  } = useEmployeesData();

  // Filter employees based on selected department, search value, or both
  const currentEmployeesList = useMemo(() => {
    return employees.filter(employee => {
      const matchesDepartment =
        !selectedDepartment || employee.department === selectedDepartment;
      const matchesSearch =
        !searchValue ||
        employee.name.toLowerCase().includes(searchValue.toLowerCase());
      return matchesDepartment && matchesSearch;
    });
  }, [employees, selectedDepartment, searchValue]);

  const handleDepartmentChoice = (value: string) => {
    setSelectedDepartment(value);
  };

  const handleEmployeeDeletion = (value: string) => {
    // Find the index of the employee with the provided email value
    const index = employees.findIndex(employee => employee.email === value);

    // If the employee with the provided email is found, remove it from the list
    if (index !== -1) {
      console.log(value, index);
      deleteEmployee(index);
    } else {
      console.log("Employee not found");
    }
  };

  return (
    <Container fluid className="g-0 px-5">
      <Container className="d-flex flex-sm-row flex-column justify-content-between gap-3 my-5 m-0 p-0">
        <Search setSearchValue={setSearchValue} />
        <FilterEmployees
          selectedDepartment={selectedDepartment}
          handleDepartmentChoice={handleDepartmentChoice}
        />
      </Container>
      <EmployeesTable
        employees={currentEmployeesList}
        onDelete={handleEmployeeDeletion}
      />
    </Container>
  );
};

export default Home;
