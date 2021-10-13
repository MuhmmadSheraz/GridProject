import logo from "../../Assets/logo.png";
import Image1 from "../../Assets/im1.svg";
import Image2 from "../../Assets/img2.svg";
import Image3 from "../../Assets/img3.svg";
import Image4 from "../../Assets/img4.svg";
import Image5 from "../../Assets/img5.svg";
import Image6 from "../../Assets/img6.svg";
import Image7 from "../../Assets/img7.svg";
import Image8 from "../../Assets/img8.svg";
import Image9 from "../../Assets/img9.svg";
import Image10 from "../../Assets/img10.svg";
import Image11 from "../../Assets/img11.svg";
import Image13 from "../../Assets/img13.svg";
import Image14 from "../../Assets/img14.svg";
import Image15 from "../../Assets/img15.svg";
import Image16 from "../../Assets/img16.svg";
import yellowring from "../../Assets/yellowring.svg";
import brownfire from "../../Assets/brownfire.svg";
import browngown from "../../Assets/browngown.svg";
import capgirl from "../../Assets/capgirl.svg";
import discord from "../../Assets/discord.svg";
import twitter from "../../Assets/twitter.svg";
import logoMark from "../../Assets/xo.svg";
import last from "../../Assets/last.svg";
import ImageCard from "../../Components/ImageCard/index";
import Fade from "react-reveal/Fade";
import "bootstrap/dist/js/bootstrap.js";
import "./style.css";
import About from "../../Components/About/index";
import Modal from "../../Components/Modal/index";
import { useState, useRef, useEffect } from "react";
function Home({ showModal, setShowModal }) {
  const imageData = [
    {
      img: [Image1, Image2],
    },
    {
      img: [Image3, Image4],
    },
    {
      img: [yellowring, Image6],
    },
    {
      img: [Image7, Image8],
    },
    {
      img: [Image9, Image5],
    },
    {
      img: [brownfire, Image15],
    },
    {
      img: [Image11, Image14],
    },
    {
      img: [capgirl, Image16],
    },
    {
      img: [browngown, last],
    },
    // {
    //   img: [Image2, Image7],
    // },
  ];
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowModal(false);
      document.body.style.overflow = "unset";
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  function redirect(url) {
    window.open(url, "_blank");
  }

  return (
    <div className="container  sub_home_wrapper pb-3 d-flex justify-content-center align-items-center flex-column pt-5">
      <div className="row no-gutters justify-content-center  w-100">
        {/* Text */}
        <div className="col-md-6 center leftMain padding-0 alignText">
          {showModal && (
            <div className="modal_main " ref={ref}>
              <Modal showModal={showModal} setShowModal={setShowModal} />
            </div>
          )}
          <h1 id="home" className="header_heading">
            WELCOME TO COLLEGE KIDS
          </h1>
          <p className="pt-3 header_content">
            A collection of 10,000 CollegeKids transported into the Metaverse, a
            place where they can become anything they want.
          </p>
          <div>
            <button
              className="headerButton justify-content-center align-items-center mt-3 text-center"
              onClick={() => {
                setShowModal(true);
                document.body.style.overflow = "hidden";
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              MINT
            </button>
          </div>
          <hr className="hr_custom alignText my-4" />
          <div className="alignText">
            <h3 className="mb-3">STAY UP TO DATE!</h3>
            <img alt="icon" src={logoMark} className="upadteIcon hoverMe" />
            <img
              onClick={() => redirect("https://discord.gg/5pCcQS9Fpc")}
              alt="icon"
              src={discord}
              className="upadteIcon mx-3 hoverMe"
            />
            <img
              alt="icon"
              onClick={() => redirect("https://twitter.com/CollegeKidsNFT")}
              src={twitter}
              className="upadteIcon hoverMe"
            />
          </div>
          <hr className="hr_custom  alignText my-4" />
          {/* Section 2 */}
          <section className="mb-2 mt-5">
            <h1 id="roadmap" className="display-2 alignText mt-3 mb-5">
              ROADMAP
            </h1>
            <div className="row w-full m-0 ">
              <div className="col-md-6 py-0  leftSideRow_wrapper">
                <div className="box  w-full">
                  <h4 className="row-card-content mt-0  ">
                    First 500 people in discord get OG role whitelisted to mint.
                  </h4>
                  <p className="date">October 2021</p>
                </div>
                <div className="box  w-full">
                  <h4 className="row-card-content">
                    DAO to be established , allowing for community based voting
                    and decision making to holders.
                  </h4>
                  <p className="date">October 2021</p>
                </div>
                <div className="box  w-full mb_0">
                  <h4 className="row-card-content ">
                    Create breeding system to create scarcity in the original
                    collection and release new collection of babies available
                    only though breeding
                  </h4>
                  <p className="date">October 2021</p>
                </div>
              </div>
              <div className="col-md-6 p-0">
                <div className="box-2  w-full">
                  <h4 className="row-card-content row_card_heading">
                    Discord giveaways to be announced.
                  </h4>
                  <p className="date">October 2021</p>
                </div>
                <div className="box-2  w-full">
                  <h4 className="row-card-content">
                    Launch initial 10,000 CollegeKids
                  </h4>
                  <p className="date">October 2021</p>
                </div>
                <div className="box-2  w-full">
                  <h4 className="row-card-content">
                    ERC-20 Smart contracts will be deployed, allowing for
                    staking and liquidity pools to yield $DiningDollars
                  </h4>
                  <p className="date">November 2021</p>
                </div>
                <div className="box-2  w-full  small_font text-center">
                  <p className="small_font row-card-content text-center">
                    More collegekids Announcement <br />
                    coming soon
                  </p>
                  <div className=" flex-row justify-content-around pb-4 ">
                    <img src={logo} alt="" className="logoSize  " />
                    <img src={logo} alt="" className="mx-2 logoSize" />
                    <img src={logo} alt="" className="logoSize  " />
                    <img src={logo} alt="" className="mx-2 logoSize" />
                  </div>
                </div>
              </div>{" "}
            </div>
          </section>
          {/* Section 3 */}
          <div className="mt-4" id="about">
            <About />
          </div>
        </div>
        {/* Images */}
        <div className="col-md-6 padding-0  text-center overflow-hidden">
          {imageData.map(({ img }, index) => {
            return (
              <Fade key={index} right duration={400} delay={400}>
                <ImageCard image1={img[0]} image2={img[1]} />
              </Fade>
            );
          })}
        </div>
      </div>
      {/* Modal */}
      <div className="textBar">
        <img alt="icon" src={logoMark} className="upadteIcon textLineIcon" />
        Launching on the first Layer 2 for NFTs on ETH, Immutable X. This means
        0 GAS FEES wehn trading!!
        <img alt="icon" src={logoMark} className="upadteIcon textLineIcon" />
      </div>
      {showModal && <div className="overlay" />}
    </div>
  );
}

export default Home;
