import React from "react";
import { Route, Routes } from "react-router-dom";
import AddEmployee from "pages/AddEmployee";
import ErrorPage from "pages/Error";
import Home from "pages/Home";
import EmployeesDataContextProvider from "context/employeesDataContext";
import Layout from "./Layout";
import "./App.module.css";

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
