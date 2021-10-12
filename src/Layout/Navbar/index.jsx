import React from "react";
import logo from "../../Assets/logo.png";
import logoMark from "../../Assets/xo.svg";
import discord from "../../Assets/discord.svg";
import twitter from "../../Assets/twitter.svg";
import close from "../../Assets/close.png";
import "./style.css";
const Navbar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="container w-100 px-3 mt-2" style={{ paddingTop: "25px" }}>
      <nav className="navbar navbar-expand-lg justify-content-between navbar-light bg-transparent">
        <div className="d-flex align-items-center">
          <img
            src={logo}
            className="h-50 w-50 "
            style={{ marginRight: "5px" }}
            alt="logo"
          />
          <h3 className="logoText">CollegeKids</h3>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          style={{ boxShadow: "none" }}
          aria-label="Toggle navigation"
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
        >
          {showSidebar ? (
            <img src={close} className="closeIcon" alt="icon" />
          ) : (
            <span
              className="navbar-toggler-icon "
              style={{ boxShadow: "none", border: 0 }}
            ></span>
          )}
        </button>

        <div
          style={{ display: "none" }}
          className="navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto align-items-center">
            <a href="#home" className="list-unstyle px-2 nav_item">
              HOME
            </a>
            <a href="#roadmap" className="list-unstyle px-2  nav_item ">
              ROADMAP
            </a>
            <a href="#about" className="list-unstyle px-2  nav_item">
              ABOUT
            </a>
            <li className="list-unstyle px-2 nav_item">
              <img src={logoMark} className="h-25" alt="icon" />
            </li>
            <li className="list-unstyle px-2 nav_item">
              <img src={discord} className="h-25" alt="icon" />
            </li>
            <li className="list-unstyle px-2 nav_item">
              <img src={twitter} className="h-25" alt="icon" />
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
