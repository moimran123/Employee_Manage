import React, { useState } from "react";
import EmployeeServices from "../services/EmployeeServices";
import { Link } from "react-router-dom";
const SearchEmployeeComponent = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState("");

  const searchEmployee = (e) => {
    e.preventDefault();
    setError("");  // Clear previous error message

    if (employeeId.trim() === "") {
      setError("Employee ID cannot be empty");
      return;
    }

    EmployeeServices.getEmployeeById(employeeId)
      .then((response) => {
        setEmployee(response.data);
        setError("");  // Clear previous error message
      })
      .catch((error) => {
        console.error(error);
        setError("Employee not found");
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Search Employee by ID</h2>
          <Link className="btn btn-info mb- add-employee-button " to="/main">
           Main Page
          </Link>
      
          <div className="card-body">
            <form onSubmit={searchEmployee}>
              <div className="form-group mb-2">
                <label className="form-label">Employee ID:</label>
                <input
                  type="text"
                  placeholder="Enter employee ID"
                  name="employeeId"
                  className="form-control"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                />
              </div>
              <button className="btn btn-primary">Search</button>
            </form>
            {error && <div className="alert alert-danger mt-3">{error}</div>}
            {employee && (
              <div className="mt-3">
                <h3>Employee Details:</h3>
                <p><strong>ID:</strong> {employee.empid}</p>
                <p><strong>First Name:</strong> {employee.firstname}</p>
                <p><strong>Last Name:</strong> {employee.lastname}</p>
                <p><strong>Designation:</strong> {employee.designation}</p>
                <p><strong>Project:</strong> {employee.project}</p>
                <p><strong>Status:</strong> {employee.status}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchEmployeeComponent;
