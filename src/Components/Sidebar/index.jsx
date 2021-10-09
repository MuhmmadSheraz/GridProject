import React from "react";
import "./style.css";
import discord from "../../Assets/Logomark-Blue 1.png";
import logoMark from "../../Assets/discord.png";
import twitter from "../../Assets/twitter.png";
const index = () => {
  return (
    <div className="bg-danger sidebar_wrapper ">
      <p>
        <p className="list-unstyle px-2 nav_item">HOME</p>
        <p className="list-unstyle px-2  nav_item ">ROADMAP</p>
        <p className="list-unstyle px-2  nav_item">ABOUT</p>
        <p className="list-unstyle px-2">
          <img src={logoMark} className="h-25" />
        </p>
        <p className="list-unstyle px-2">
          <img src={discord} className="h-25" />
        </p>
        <p className="list-unstyle px-2">
          <img src={twitter} className="h-25" />
        </p>

        <p className="list-unstyle px-2">
          <button className="nav-button">MINT</button>
        </p>
      </p>
    </div>
  );
};

export default index;
