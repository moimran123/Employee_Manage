import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeServices from "../services/EmployeeServices";
import "./ListEmployeeComponent.css";
import image from './image.jpg';
import Header from "./Header";

const ListEmployeeComponent = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    EmployeeServices.getAllEmployee()
      .then((response) => {
        setEmployee(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteEmployee = (employeeId) => {
    EmployeeServices.deleteEmployee(employeeId)
      .then((response) => {
        setEmployee((prevEmployees) =>
          prevEmployees.filter((emp) => emp.empid !== employeeId)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
     <h1> All  Employee Detail</h1>

     <Link className="btn btn-info mb- add-employee-button " to="/main">
           Main Page
          </Link>
      
      <div className="margin-20">
        {/* <Link to="/" className="btn btn-danger"> Logout </Link > */}
      </div>
      
      <Link className="btn btn-info mb-2 add-employee-button" to="/add-employee">
        Add Employee
      </Link>
       
      <div className="row">
        {employee.map((emp) => (
          <div className="col-md-4 mb-4" key={emp.empid}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{emp.firstname} {emp.lastname}</h5>
                <p className="card-text"><strong>Employee ID:</strong> {emp.empid}</p>
                <p className="card-text"><strong>Designation:</strong> {emp.designation}</p>
                <p className="card-text"><strong>Project:</strong> {emp.project}</p>
                <p className="card-text"><strong>Status:</strong> {emp.status}</p>
                <Link className="btn btn-info" to={`/edit-employee/${emp.empid}`}>
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmployee(emp.empid)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
