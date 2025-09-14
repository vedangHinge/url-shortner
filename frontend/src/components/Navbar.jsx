import React from "react";
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">URL Shortener</div>
      <div className="navbar-links">
        <a href="/" className="navbar-link">Home</a>
        <a href="/about" className="navbar-link">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
