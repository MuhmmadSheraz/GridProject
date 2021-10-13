import React from "react";
import logo from "../../Assets/logo.png";
import logoMark from "../../Assets/xo.svg";
import discord from "../../Assets/discord.svg";
import twitter from "../../Assets/twitter.svg";
import close from "../../Assets/close.png";
import CollegeKids from "../../Assets/collogo.svg";
import "./style.css";
const Navbar = ({ showSidebar, setShowSidebar, showModal, setShowModal }) => {
  function redirect(url) {
    window.open(url, "_blank");
  }

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
          <img src={CollegeKids} alt="logo" className="colLogo" />
        </div>
        <button
          className="navbar-toggler "
          type="button"
          style={{ boxShadow: "none", zIndex: "90000000000000" }}
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
              <img
                src={discord}
                className="h-25"
                alt="icon"
                onClick={() => redirect("https://discord.gg/5pCcQS9Fpc")}
              />
            </li>
            <li className="list-unstyle px-2 nav_item">
              <img
                onClick={() => redirect("https://twitter.com/CollegeKidsNFT")}
                src={twitter}
                className="h-25"
                alt="icon"
              />
            </li>

            <li className="list-unstyle px-2">
              <button
                className="nav-button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setShowModal(true);
                  document.body.style.overflow = "hidden";
                }}
              >
                MINT
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
