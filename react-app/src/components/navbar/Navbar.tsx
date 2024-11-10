import React from "react";
import Coordinators from "../Coordinators";
import logo from "../../assets/gandaBherunda.png";
import { Link } from 'react-router-dom';
import HomePage from "../HomePage";
import EventsGallery from "../EventsGallery";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="nav">
      <img src="../../assets/gandabherunda.png" alt="" className="logo" />
      <ul>
        <li><Link to="/">
          <div><button>Home</button></div>
        </Link></li>
        <li><Link to="/coordinators">
          <div><button>Contact us</button></div>
        </Link></li>
        <li><Link to="/eventGallery">
          <div><button>Events</button></div>
        </Link></li>
        <li><Link to="/tShirtPage">
          <div><button>T-shirt</button></div>
        </Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
