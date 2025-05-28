import React from "react";
import "../../index.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav className="navbar">
      <Link to="/" className="logo">TaskDash</Link>
      <div className="nav-links">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="link"></Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="link">Login</Link>
            <Link to="/register" className="link">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
