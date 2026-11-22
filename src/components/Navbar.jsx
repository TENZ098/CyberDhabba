
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span className="logo-icon"></span>
        <span>Cyber<span className="logo-highlight">Dhabba</span></span>
      </Link>

      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/meals">
          Our Meals
        </NavLink>

        <NavLink to="/planner">
          Weekly Planner
        </NavLink>

        <Link to="/checkout" className="nav-order-btn">
          Order Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
