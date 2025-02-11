import logo from "../images/swiggy.svg";

const HeadingComponent = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Swiggy Logo" />
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Sign In</a>
      </nav>
    </header>
  );
};

export default HeadingComponent;
