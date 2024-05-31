import axios from "axios";

const Employee_BASE_REST_API_URL = "http://localhost:8080/product";

class EmployeeServices {
  getAllEmployee() {
    return axios.get(Employee_BASE_REST_API_URL);
  }

  createEmployee(employee) {
    return axios.post(Employee_BASE_REST_API_URL, employee);
  }
  getEmployeeById(employeeId) {
    return axios.get(Employee_BASE_REST_API_URL + "/" + employeeId);
  }

  updateEmployee(employeeId, employee) {
    return axios.put(Employee_BASE_REST_API_URL + "/" + employeeId, employee);
  }

  deleteEmployee(employeeId) {
    return axios.delete(Employee_BASE_REST_API_URL + "/" + employeeId);
  }
}

export default new EmployeeServices();
