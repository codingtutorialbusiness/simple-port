import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import profile from "../img/profile-pic.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="profile-wrapper">
        <div className="profile-img">
          <img src={profile} alt="Profile avatar" />
        </div>
        <h1>
          Hi, My Name is John Doe <br /> I am a frontend developer.
        </h1>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
