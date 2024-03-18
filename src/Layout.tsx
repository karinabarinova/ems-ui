import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "components/Navbar/Navbar";

const Layout: React.FC = () => {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
