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

    const validateField = (
        field: keyof ErrorState,
        value: string | number,
    ): string | null => {
        switch (field) {
            case "name":
                return value ? null : "Name is required";
            case "email":
                if (!value) return "Email address is required";
                return VALID_EMAIL_REGEX.test(String(value))
                    ? null
                    : "Invalid email format";
            case "position":
                return value ? null : "Position is required";
            case "department":
                return value ? null : "Department is required";
            case "salary":
                return value ? null : "Salary is required";
            case "startDate":
                return value ? null : "Start date is required";
            default:
                return null;
        }
    };

    const setField = (field: keyof ErrorState, value: string | number) => {
        setForm({
            ...form,
            [field]: value,
        });

        const newErrors = validateField(field, value);
        setErrors({
            ...errors,
            [field]: newErrors,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formErrors = validateForm();

        if (Object.values(formErrors).every(error => error === null)) {
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
        } else {
            setErrors(formErrors);
        }
    };

    const validateForm = () => {
        const newErrors = {} as ErrorState;

        for (const field in form) {
            if (Object.prototype.hasOwnProperty.call(form, field)) {
                newErrors[field as keyof ErrorState] = validateField(
                    field as keyof ErrorState,
                    form[field as keyof FormState],
                );
            }
        }

        return newErrors;
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
                            onChange={e => setField("name", e.target.value)}
                            isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>
                    </FormField>
                    <FormField controlId="formGridEmail" label="Email">
                        <Form.Control
                            type="email"
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
                            value={form.position}
                            placeholder="Project Manager"
                            onChange={e => setField("position", e.target.value)}
                            isInvalid={!!errors.position}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.position}
                        </Form.Control.Feedback>
                    </FormField>
                    <FormField
                        controlId="formGridDepartment"
                        label="Department">
                        <Form.Control
                            value={form.department}
                            type="text"
                            placeholder="Product Management"
                            onChange={e =>
                                setField("department", e.target.value)
                            }
                            isInvalid={!!errors.department}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.department}
                        </Form.Control.Feedback>
                    </FormField>
                </Row>
                <Row className="mb-3 gap-3 flex-column flex-sm-row">
                    <FormField controlId="formGridSalary" label="Salary">
                        <InputGroup className="mb-3">
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control
                                type="number"
                                min={0}
                                value={form.salary}
                                aria-label="Amount (to the nearest dollar)"
                                onChange={e =>
                                    setField("salary", e.target.value)
                                }
                                isInvalid={!!errors.salary}
                            />
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>
                        <Form.Control.Feedback type="invalid">
                            {errors.salary}
                        </Form.Control.Feedback>
                    </FormField>
                    <FormField controlId="formGridStartDate" label="Start date">
                        <Form.Control
                            type="date"
                            onChange={e =>
                                setField("startDate", e.target.value)
                            }
                            value={form.startDate}
                            isInvalid={!!errors.startDate}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.startDate}
                        </Form.Control.Feedback>
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
