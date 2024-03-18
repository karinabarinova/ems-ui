import React from "react";
import Container from "react-bootstrap/Container";
import AddEmployeeForm from "components/AddEmployeeForm/AddEmployeeForm";

const AddEmployee: React.FC = () => {
    return (
        <Container className="mt-3 mt-md-5 d-flex justify-content-center align-items-center">
            <AddEmployeeForm />
        </Container>
    );
};

export default AddEmployee;
