import React from "react";
import gif from "../../Assets/gif.gif";
import logoMark from "../../Assets/xo.svg";

import discord from "../../Assets/discord.svg";
import twitter from "../../Assets/twitter.svg";

import Fade from "react-reveal/Fade";
import "./style.css";
const index = ({ showModal, setShowModal }) => {
  function redirect(url) {
    window.open(url, "_blank");
  }

  return (
    <Fade top duration={1000} delay={1200}>
      <div className=" pb-5 d-flex justify-content-center align-items-center mt-5 flex-column pb-2">
        <hr className="footer_separator mb-3  " />
        <img src={gif} className="footerImage mt-4 " alt="cartoonImage" />
        <h1 className="mt-4">START MINTING NOW</h1>
        <button
          className="footer_button  mt-3 "
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setShowModal(true);
            document.body.style.overflow = "hidden";
          }}
        >
          MINT
        </button>
        <div className="d-flex align-items-center mt-4 ">
          <img src={logoMark} alt="" className="mx-3 hoverMe" />
          <img
            onClick={() => redirect("https://discord.gg/5pCcQS9Fpc")}
            src={discord}
            alt=""
            className="mx-3 hoverMe"
          />
          <img
            onClick={() => redirect("https://twitter.com/CollegeKidsNFT")}
            src={twitter}
            alt=""
            className="mx-3 hoverMe"
          />
        </div>
      </div>
      <div className="footerLine py-2 mt-2">
        Developed by{" "}
        <a className="linkBtn" href="https://smashcode.dev">
          Smash Code
        </a>
      </div>
    </Fade>
  );
};

export default index;
