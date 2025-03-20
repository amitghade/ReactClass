import logo from "../images/swiggy.svg";
import { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useNavigate } from "react-router";

import { UserContext } from "../utils/UserContext";

const HeadingComponent = () => {
  // let btnLabel = "Login";
  const [btnLabel, setBtnLabel] = useState("Login");
  console.log("HeadingComponent rendered");

  let onlineStatus = useOnlineStatus();
  const location = useLocation();

  const navigate = useNavigate();

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const handleLoginBtn = () => {
    if (loggedInUser) {
      setLoggedInUser("");
    } else {
      navigate("/login");
    }
  };

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
        <button onClick={handleLoginBtn}>
          {loggedInUser ? "Logout" : "Login"}
        </button>
        {location.pathname === "/" && !loggedInUser && <span>Guest</span>}
        {loggedInUser && <Link className="font-bold">{loggedInUser}</Link>}
      </nav>
    </header>
  );
};

export default HeadingComponent;
