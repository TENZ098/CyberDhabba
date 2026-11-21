import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🍱 CyberDhabba
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/meals">Meals</Link>
        <Link to="/planner">Weekly Planner</Link>
        <Link to="/checkout" className="nav-order-btn">
          Order Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;