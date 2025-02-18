import logo from "../images/swiggy.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const HeadingComponent = () => {
  // let btnLabel = "Login";
  const [btnLabel, setBtnLabel] = useState("Login");
  console.log("HeadingComponent rendered");

  // useEffect(() => {
  //   console.log("useEffect of Heading Component called");
  // }, [btnLabel]);
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Swiggy Logo" />
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <a href="#">Cart</a>
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
