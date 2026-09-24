import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center my-5 py-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="text-light mb-3">Page Not Found</h2>
      {/* <p className="text-secondary mb-4">
        Oops! The page you are looking for does not exist or has been moved.
      </p> */}
      <Link to="/" className="btn btn-warning fw-bold px-4 py-2">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;

