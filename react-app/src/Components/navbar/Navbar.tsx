import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <header className="header">
      <a href="/" className="logo">
      Karnatka Rajyotsava
      </a>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/">Events</a>
        <a href="/">T-shirt</a>
      </nav>
    </header>
  );
}

export default Navbar;
