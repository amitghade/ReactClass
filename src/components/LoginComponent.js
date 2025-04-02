import React from "react";
import { useState, useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import axios from "axios";

const LoginComponent = () => {
  console.log("Login component rendered");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setLoggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  // const dummyUsers = {
  //   user1: { username: "priyanshu", password: "1234" },
  //   user2: { username: "shivani", password: "1234" },
  //   user3: { username: "vina", password: "1234" },
  // };
  // const handleLogin = () => {
  //   let user = Object.values(dummyUsers).find((u) => {
  //     console.log(u);
  //     return u.username === username && u.password === password;
  //   });

  //   if (user) {
  //     setLoggedInUser(username);
  //     navigate("/");
  //   } else {
  //     setError("No user found");
  //   }
  // };

  const handleLogin = async () => {
    if (username === "" && password === "") {
      setError("Username & Password cannot be blank");
      return;
    }
    try {
      const response = await axios.get(
        "https://668f9191c0a7969efd985b93.mockapi.io/one"
      );
      console.log(response);

      let user = response.data.find((u) => {
        console.log(u);
        return u.username === username && u.password === password;
      });
      console.log(user);

      if (user) {
        setLoggedInUser(username);
        navigate("/");
      } else {
        setError("Failed to fetch users");
      }
    } catch (err) {
      setError("Failed to fetch users. Please try again.");
    }
  };

  const handleSignup = async () => {
    console.log("handleSignup activated");
    if (username === "" && password === "") {
      setError("Username & Password cannot be blank");
      return;
    }

    try {
      const response = await axios.get(
        "https://668f9191c0a7969efd985b93.mockapi.io/one"
      );
      console.log("get response", response);

      const existingUser = response.data.some((u) => {
        return u.username === username;
      });
      if (existingUser) {
        setError("User alredy exist");
        return;
      }
    } catch (err) {
      setError("Failed to fetch data");
    }

    try {
      const signup = await axios.post(
        "https://668f9191c0a7969efd985b93.mockapi.io/one",
        { username, password }
      );
      console.log(signup);
      if (signup.status === 201) {
        setLoggedInUser(username);
        navigate("/");
      } else {
        setError("Failed to fetch users");
      }
    } catch (err) {
      setError("Failed to signup");
    }
  };

  return (
    <div className="flex justify-center mt-10 ">
      <div className="bg-blue-400 w-4/12 p-7  shadow-2xl">
        <h1 className="text-center">Login Form</h1>
        <div>
          <label> Username:</label>
          <input
            className="border border-black"
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
            className="border border-black"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <button
          className="bg-amber-300 p-2 cursor-pointer"
          onClick={handleLogin}
        >
          Login
        </button>
        <Button onClick={handleSignup} variant="contained">
          Signup
        </Button>
        {error && <p className="text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default LoginComponent;
