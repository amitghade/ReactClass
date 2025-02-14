import logo from "../images/swiggy.svg";
import { useState } from "react";

const HeadingComponent = () => {
  // let btnLabel = "Login";
  const [btnLabel, setBtnLabel] = useState("Login");
  console.log("HeadingComponent rendered");
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Swiggy Logo" />
      </div>

     

      {/* Navigation Links */}
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Sign In</a>
        <button
          onClick={() => {
            // setBtnLabel("Logout");
            btnLabel === "Login" ? setBtnLabel("Logout") : setBtnLabel("Login");
          }}
        >
          {btnLabel}
        </button>
      </nav>
    </header>
  );
};

export default HeadingComponent;
