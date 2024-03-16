import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Header } from "components/Header/Header";
import Home from "pages/Home";
import AddEmployee from "pages/AddEmployee";
import ErrorPage from "pages/Error";

function App() {
  return (
    <Container fluid className="g-0">
      <Header />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-employee" element={<AddEmployee />}></Route>
      </Routes>
      <Outlet />
    </Container>
  );
}

export default App;
