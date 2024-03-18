import React, { useContext, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/FormGroup";
import { VALID_EMAIL_REGEX } from "utils/constants";
import { EmployeesDataContext } from "context/employeesDataContext";
import {
    ErrorState,
    FormFieldParams,
    FormState,
} from "./AddEmployeeForm.types";

const FormField = ({ controlId, label, children }: FormFieldParams) => (
    <Form.Group as={Col} controlId={controlId}>
        <Form.Label className="font-weight-bold">{label}</Form.Label>
        {children}
    </Form.Group>
);

const AddEmployeeForm = () => {
    const [showMessage, setShowMessage] = useState(false);
    const { employees, createEmployee } = useContext(EmployeesDataContext);

    const [form, setForm] = useState<FormState>({
        id: 0,
        name: "",
        email: "",
        position: "",
        department: "",
        salary: 0,
        startDate: "",
    });
    const [errors, setErrors] = useState<ErrorState>({
        id: null,
        name: null,
        email: null,
        position: null,
        department: null,
        salary: null,
        startDate: null,
    });

    const setField = (field: keyof ErrorState, value: string | number) => {
        setForm({
            ...form,
            [field]: value,
        });

        if (!errors[field]) {
            setErrors({
                ...errors,
                [field]: null,
            });
        }
    };

    const validateForm = () => {
        const { startDate, department, email, name, position, salary } = form;
        const newErrors = {} as ErrorState;

        if (!email.length) {
            newErrors.email = "Email address is required";
        } else if (!VALID_EMAIL_REGEX.test(email)) {
            newErrors.email = "Invalid email format";
        }
        if (!startDate) {
            newErrors.startDate = "Start date is required";
        }
        if (!department) {
            newErrors.department = "Department is required";
        }
        if (!position) {
            newErrors.position = "Position is required";
        }
        if (!name) {
            newErrors.name = "Name is required";
        }
        if (!salary) {
            newErrors.salary = "Salary is required";
        }

        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            form.id = employees[employees.length - 1].id + 1;
            createEmployee(form);
            setShowMessage(true);

            setTimeout(() => {
                setShowMessage(false);
            }, 5000);

            // Reset form data
            setForm({
                id: 0,
                name: "",
                email: "",
                position: "",
                department: "",
                salary: 0,
                startDate: "",
            });
        }
    };

    return (
        <Col
            xs={10}
            sm={10}
            md={10}
            xl={8}
            className="d-flex justify-content-center align-items-center flex-column mx-3 my-4 m-sm-5">
            <h2 className="text-center">Employee profile information</h2>
            <Form className="mt-5" onSubmit={handleSubmit}>
                <Row className="mb-3 gap-3 flex-column flex-sm-row">
                    <FormField controlId="formGridName" label="Full name">
                        <Form.Control
                            type="text"
                            placeholder="Enter full name"
                            value={form.name}
                            required
                            onChange={e => setField("name", e.target.value)}
                        />
                    </FormField>
                    <FormField controlId="formGridEmail" label="Email">
                        <Form.Control
                            type="email"
                            required
                            placeholder="Enter email"
                            onChange={e => setField("email", e.target.value)}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </FormField>
                </Row>
                <Row className="mb-3 gap-3 flex-column flex-sm-row">
                    <FormField controlId="formGridPosition" label="Position">
                        <Form.Control
                            type="text"
                            required
                            value={form.position}
                            placeholder="Project Manager"
                            onChange={e => setField("position", e.target.value)}
                        />
                    </FormField>
                    <FormField
                        controlId="formGridDepartment"
                        label="Department">
                        <Form.Control
                            value={form.department}
                            type="text"
                            required
                            placeholder="Product Management"
                            onChange={e =>
                                setField("department", e.target.value)
                            }
                        />
                    </FormField>
                </Row>
                <Row className="mb-3 gap-3 flex-column flex-sm-row">
                    <InputGroup className="mb-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control
                            type="number"
                            min={0}
                            value={form.salary}
                            required
                            aria-label="Amount (to the nearest dollar)"
                            onChange={e => setField("salary", e.target.value)}
                        />
                        <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup>
                    <FormField controlId="formGridStartDate" label="Start date">
                        <Form.Control
                            type="date"
                            required
                            onChange={e =>
                                setField("startDate", e.target.value)
                            }
                            value={form.startDate}
                        />
                    </FormField>
                </Row>
                <FormGroup
                    controlId="submit"
                    className="d-flex justify-content-center align-items-center">
                    <Button className="my-2" variant="primary" type="submit">
                        Submit
                    </Button>
                </FormGroup>
                <div
                    className={`d-flex justify-content-center align-items-center ${!showMessage && "visually-hidden-focusable"}`}>
                    <div className="text-success font-weight-bold">
                        Employee was created successfully
                    </div>
                </div>
            </Form>
        </Col>
    );
};

export default AddEmployeeForm;
