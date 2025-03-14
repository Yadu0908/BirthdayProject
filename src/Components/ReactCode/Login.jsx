import React, { useState } from "react";
import Basic from "./Basic";
import "../CssCode/Login.css"; 

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Hardcoded username and password
  const correctUsername = "kinderjoy";
  const correctPassword = "kinderjoy";

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === correctUsername && password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect Username or Password!");
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <Basic /> // If authenticated, show Basic.jsx
      ) : (
        <div className="login-container">
          <div className="login-box">
            <h2>Welcome Back</h2>
            <p>Please enter your credentials to log in</p>
            <form onSubmit={handleLogin} className="login-form">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
