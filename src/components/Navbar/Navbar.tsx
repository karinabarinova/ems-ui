import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export const NavBar: React.FC = () => {
    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <NavLink className="navbar-brand" to="/">
                        Employee Management System
                    </NavLink>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink
                            className="text-decoration-none"
                            to="/add-employee">
                            Add a new employee
                        </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
