import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = Math.random().toString(36).substr(2); // should be replaced with real authentication
    localStorage.setItem("authToken", token);
    // history.push('/employee');
    navigate("/employee");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    // history.push('/');
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      // history.push('/')
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <div>Home Login page</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button onClick={handleSubmit} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
