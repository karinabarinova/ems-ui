import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import styles from "./Navbar.module.css";

const Link = ({ title, path }: { title: string; path: string }) => {
    return (
        <NavLink to={path} className="text-decoration-none">
            <Navbar.Text className={styles.link}>{title}</Navbar.Text>
        </NavLink>
    );
};

const NavBar: React.FC = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

    useEffect(() => {
        const updateMedia = () => {
            setDesktop(window.innerWidth > 1450);
        };

        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, []);

    return (
        <header>
            <Navbar
                expand="lg"
                className="bg-body-tertiary"
                bg="dark"
                data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand>
                        {isDesktop ? "Employee Management System" : "EMS"}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-end">
                        <Nav className="d-flex justify-content-end align-items-center gap-2 gap-md-3 gap-lg-4">
                            <Link title="Home" path="/" />
                            <Link
                                title="Add a new employee"
                                path="/add-employee"
                            />
                            <Link title="Not found" path="/not-found" />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavBar;
