import React from "react";
import Image2 from "../../Assets/img2.png";
import logoMark from "../../Assets/Logomark-Blue 1.png";

import discord from "../../Assets/discord.png";
import twitter from "../../Assets/twitter.png";

import Fade from "react-reveal/Fade";
import "./style.css";
const index = () => {
  return (
    <Fade top duration={1000} delay={1200}>
      <div className="d-flex justify-content-center align-items-center mt-5 flex-column pb-2">
        <hr className="footer_separator" />
        <img src={Image2} className="footerImage" alt="cartoonImage" />
        <h1 className="mt-2">START MINNG NOW</h1>
        <button className="footer_button  mt-3 ">MINT</button>
        <div className="d-flex align-items-center mt-3 ">
          <img src={logoMark} alt="" className="mx-3" />
          <img src={discord} alt="" className="mx-3" />
          <img src={twitter} alt="" className="mx-3" />
        </div>
      </div>
    </Fade>
  );
};

export default index;
