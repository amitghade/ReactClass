import React from "react";
import { useState } from "react";

const LoginComponent = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dummyUsers = {
    user1: { username: "priyanshu", password: "1234" },
    user2: { username: "shivani", password: "1234" },
    user3: { username: "vina", password: "1234" },
  };
  const handleLogin = () => {};

  return (
    <div>
      <div>
        <h1>Login Form</h1>
        <div>
          <label> Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label> Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginComponent;
