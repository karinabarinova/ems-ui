import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { BsPersonAdd } from "react-icons/bs";

const NavBar: React.FC = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1450);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <header>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <NavLink className="navbar-brand" to="/">
                        {isDesktop ? "Employee Management System" : "EMS"}
                    </NavLink>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink
                            className="text-decoration-none"
                            to="/add-employee">
                            <BsPersonAdd className="text-light h3" />
                        </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavBar;
