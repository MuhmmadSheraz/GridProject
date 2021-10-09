import React from "react";
import "./style.css";
import logo from "../../Assets/logo.png";
import discord from "../../Assets/Logomark-Blue 1.png";
import logoMark from "../../Assets/discord.png";
import twitter from "../../Assets/twitter.png";

const index = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="sidebar_wrapper ">
      <div className="sidebar_logo_wrapper">
        <div className="d-flex align-items-center">
          <img src={logo} className="h-50 w-50 space_l" alt="logo" />
          <h3 className="logoText ">CollegeKids</h3>
        </div>
      </div>
      <p>
        <p className="list-unstyle px-2 nav_item">HOME</p>
        <p className="list-unstyle px-2  nav_item ">ROADMAP</p>
        <p className="list-unstyle px-2  nav_item">ABOUT</p>
        <div className="d-flex W-100">
          <p className="list-unstyle mx-2">
            <img src={logoMark} className="h-75" alt="icon" />
          </p>
          <p className="list-unstyle mx-2">
            <img src={discord} className="h-75" alt="icon" />
          </p>
          <p className="list-unstyle mx-2">
            <img src={twitter} className="h-75" alt="icon" />
          </p>
        </div>

        <p className="list-unstyle px-2">
          <button className="nav-button">MINT</button>
        </p>
      </p>
    </div>
  );
};

export default index;
