import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Register.css';
 
function Register() {
    const [employeename, setEmployeename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
 
    function validateForm() {
        if (!employeename || !email || !password) {
            setError("All fields are required");
            return false;
        }
        if (!isValidEmail(email)) {
            setError("Invalid email address");
            return false;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return false;
        }
        return true;
    }
 
    function isValidEmail(email) {
        // Basic email validation
        return /\S+@\S+\.\S+/.test(email);
    }
 
    async function save(event) {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }
        try {
            await axios.post("http://localhost:8085/api/v1/employee/save", {
                employeename: employeename,
                email: email,
                password: password,
            });
            alert("Employee Registration Successfully");
            navigate("/login");
        } catch (err) {
            alert(err);
        }
    }
 
    function goToLogin() {
        navigate("/login");
    }
 
    return (
        <div className="register-container">
            <div className="register-card">
                <h1 className="register-title">Employee Registration</h1>
                {error && <div className="error">{error}</div>}
                <form className="register-form">
                    <div className="form-group">
                        <label>Employee name</label>
                        <input type="text" className="form-control" id="employeename" placeholder="Enter Name"
                            value={employeename}
                            onChange={(event) => setEmployeename(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="submit-btn" onClick={save}>Register</button>
                    <button type="button" className="login-btn" onClick={goToLogin}>Login</button>
                </form>
            </div>
        </div>
    );
}
 
export default Register;