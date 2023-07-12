import React, { useState } from "react";
import "../styles/Login.css";
import { Redirect } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "admin" && password === "admin") {
      setLoggedIn(true)
    } else {
      alert("Invalid Credentials");
    }
    setUsername("");
    setPassword("");

    if (isLoggedIn) {
        return <Redirect to="/home" />
    }

  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" 
            id="username"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
