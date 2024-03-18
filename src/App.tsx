import React from "react";
import { Route, Routes } from "react-router-dom";
import AddEmployee from "pages/add-employee";
import ErrorPage from "pages/error";
import Home from "pages/home";
import EmployeesDataContextProvider from "context/employeesDataContext";
import Layout from "./Layout";
import "./App.css";

function App() {
    return (
        <EmployeesDataContextProvider>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/add-employee" element={<AddEmployee />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </EmployeesDataContextProvider>
    );
}

export default App;
