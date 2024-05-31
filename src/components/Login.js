import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import './Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8085/api/v1/employee/login", {
                email: email,
                password: password,
            });
            
        
            console.log(response.data); // Log the response data

            if (response.data.message === "Email not exits") {
                alert("Email not exits");
            } else if (response.data.message === "Login Success") {
                navigate('/main');
            } else {
                alert("Incorrect Email and Password not match");
            }
        } catch (err) {
            console.error("Error during login:", err);
            alert(err);
        }
    }

    return (
        <div>
            <div className="login-container">
                <div className="row">
                    <h2 className='login-title'>Login</h2>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <form>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-success" onClick={login}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
