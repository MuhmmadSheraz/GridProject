import React from "react";
import Image2 from "../../Assets/img2.png";
import logoMark from "../../Assets/Logomark-Blue 1.png";

import discord from "../../Assets/discord.png";
import twitter from "../../Assets/twitter.png";
import "./style.css";
const index = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 flex-column pb-2">
      <hr className="footer_separator" />
      <img src={Image2} className="footerImage" />
      <h1 className="mt-2">START MINNG NOW</h1>
      <button className="footer_button  mt-3 ">MINT</button>
      <div className="d-flex align-items-center mt-3 ">
        <img src={logoMark} alt="" className="mx-3" />
        <img src={discord} alt="" className="mx-3" />
        <img src={twitter} alt="" className="mx-3" />
      </div>
    </div>
  );
};

export default index;
