import React from "react";
import { Container } from "react-bootstrap";
import AddEmployeeForm from "components/AddEmployeeForm/AddEmployeeForm";

const AddEmployee: React.FC = () => {
    return (
        <Container className="mt-5 mx-auto d-flex justify-content-center align-items-center">
            <AddEmployeeForm />
        </Container>
    );
};

export default AddEmployee;
