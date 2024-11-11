import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/gandabherunda.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <Link to="/" className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h3>Karnataka Rajyotsava</h3>
      </Link>
      <ul>
        <li>
          <Link to="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/coordinators">
            <button>Contact Us</button>
          </Link>
        </li>
        <li>
          <Link to="/eventGallery">
            <button>Events</button>
          </Link>
        </li>
        <li>
          <Link to="/tShirtPage">
            <button>T-Shirt</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
