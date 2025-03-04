import logo from "../images/swiggy.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeadingComponent = () => {
  // let btnLabel = "Login";
  const [btnLabel, setBtnLabel] = useState("Login");
  console.log("HeadingComponent rendered");

  let onlineStatus = useOnlineStatus();

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
        <a>Online status:{onlineStatus ? "✅" : "❌"}</a>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/grocery">Grocery</Link>
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
