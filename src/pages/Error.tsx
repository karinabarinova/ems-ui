import React from "react";

const ErrorPage: React.FC = () => {
    return (
        <div className="d-flex justify-content-center flex-column align-items-center vh-100 gap-2">
            <h1 className="font-weight-bold">Oops!</h1>
            <p>404 - Page Not Found</p>
        </div>
    );
};

export default ErrorPage;
