import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import EmployeeServices from "../services/EmployeeServices";
import { useNavigate } from "react-router-dom";
const AddEmployeeComponents = () => {
  const [firstname, setEmployeeFirstname] = useState("");
  const [lastname, setEmployeeLastname] = useState("");
  const [designation, setEmployeeDesignation] = useState("");
  const [project, setEmployeeProject] = useState("");
  const [status, setEmployeeStatus] = useState("");

  const { empid } = useParams();
  const navigate = useNavigate();

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    const employee = { firstname, lastname, designation, project, status };
    console.log(employee);
    if (empid) {
      EmployeeServices.updateEmployee(empid, employee)
        .then((response) => {
          // history.push('/employee')
          navigate("/employee");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      EmployeeServices.createEmployee(employee)
        .then((response) => {
          console.log(response.data);
          // history.push('/employee');
          navigate("/employee");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    EmployeeServices.getEmployeeById(empid)
      .then((response) => {
        setEmployeeFirstname(response.data.firstname);
        setEmployeeLastname(response.data.lastname);
        setEmployeeDesignation(response.data.designation);
        setEmployeeProject(response.data.project);
        setEmployeeStatus(response.data.status);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (empid) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  };
  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> Employee Firstname:</label>
                  <input
                    type="text"
                    placeholder="Enter employee firstname"
                    name="firstname"
                    className="form-control"
                    value={firstname}
                    onChange={(e) => setEmployeeFirstname(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Employee Lastname</label>
                  <input
                    type="text"
                    placeholder="Enter employee Lastname"
                    name="lastname"
                    className="form-control"
                    value={lastname}
                    onChange={(e) => setEmployeeLastname(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Employee Designation :</label>
                  <input
                    type="text"
                    placeholder="Enter employee designation "
                    name="designation"
                    className="form-control"
                    value={designation}
                    onChange={(e) => setEmployeeDesignation(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Employee Project:</label>
                  <input
                    type="text"
                    placeholder="Enter employee project"
                    name="project"
                    className="form-control"
                    value={project}
                    onChange={(e) => setEmployeeProject(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Employee Status:</label>
                  <input
                    type="text"
                    placeholder="Enter employee status"
                    name="status"
                    className="form-control"
                    value={status}
                    onChange={(e) => setEmployeeStatus(e.target.value)}
                  ></input>
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateEmployee(e)}
                >
                  {" "}
                  Submit
                </button>
                <Link to="/employee" className="btn btn-danger">
                  {" "}
                  Cancel{" "}
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponents;
