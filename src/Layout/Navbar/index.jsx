import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import logoMark from "../../Assets/Logomark-Blue 1.png";
import discord from "../../Assets/discord.png";
import twitter from "../../Assets/twitter.png";
import "./style.css";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="container w-100">
      <nav className="navbar navbar-expand-lg justify-content-between navbar-light bg-transparent">
        <div className="d-flex align-items-center">
          <img src={logo} className="h-50 w-50 " />
          <h3 className="logoText">CollegeKids</h3>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          style={{ display: showNav ? "flex" : "none" }}
          className="navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="list-unstyle px-2 nav_item">HOME</li>
            <li className="list-unstyle px-2  nav_item ">ROADMAP</li>
            <li className="list-unstyle px-2  nav_item">ABOUT</li>
            <li className="list-unstyle px-2">
              <img src={logoMark} className="h-25" />
            </li>
            <li className="list-unstyle px-2">
              <img src={discord} className="h-25" />
            </li>
            <li className="list-unstyle px-2">
              <img src={twitter} className="h-25" />
            </li>

            <li className="list-unstyle px-2">
              <button className="nav-button">MINT</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
