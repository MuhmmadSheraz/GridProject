import logo from "../../Assets/logo.png";
import Image1 from "../../Assets/im1.png";
import Image2 from "../../Assets/img2.png";
import Image3 from "../../Assets/img3.png";
import Image4 from "../../Assets/img4.png";
import Image5 from "../../Assets/img5.png";
import Image6 from "../../Assets/img6.png";
import discord from "../../Assets/discord.png";
import twitter from "../../Assets/twitter.png";
import logoMark from "../../Assets/Logomark-Blue 1.png";
import ImageCard from "../../Components/ImageCard/index";
import Fade from "react-reveal/Fade";
import "bootstrap/dist/js/bootstrap.js";
import "./style.css";
import About from "../../Components/About/index";
function Home() {
  const imageData = [
    {
      img: [Image1, Image2],
    },
    {
      img: [Image3, Image4],
    },
    {
      img: [Image5, Image6],
    },
    {
      img: [Image1, Image2],
    },
    {
      img: [Image3, Image4],
    },
    {
      img: [Image5, Image6],
    },
    {
      img: [Image1, Image2],
    },
    {
      img: [Image3, Image4],
    },
    {
      img: [Image5, Image6],
    },
    {
      img: [Image1, Image2],
    },
  ];
  return (
    <div className="container  sub_home_wrapper pb-3 d-flex justify-content-center align-items-center flex-column pt-5">
      <div className="row no-gutters justify-content-center  w-100">
        {/* Text */}
        <div className="col-md-6 center padding-0 alignText">
          <h1 className="header_heading">WELCOME TO COLLEGE KIDS</h1>
          <p className="pt-3 header_content">
            A collection of 10,000 CollegeKids transported into the Metaverse, a
            place where they can become anything they want
          </p>
          <div>
            <button className="headerButton justify-content-center align-items-center mt-3 text-center">
              MINT
            </button>
          </div>
          <hr className="hr_custom alignText my-4" />
          <div className="alignText">
            <h3 className="mb-3">STAY UP TO DATE!</h3>
            <img alt="icon" src={logoMark} className="upadteIcon mx-3" />
            <img alt="icon" src={discord} className="upadteIcon mx-3" />
            <img alt="icon" src={twitter} className="upadteIcon mx-3" />
          </div>
          <hr className="hr_custom  alignText my-4" />
          {/* Section 2 */}
          <section className="mb-2 mt-5">
            <h1 className="display-2 alignText mt-3 mb-5">ROADMAP</h1>
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
                    Smart contracts will be deployed, allowing for staking and
                    liquidity pools to yield $DiningDollars
                  </h4>
                  <p className="date">November 2021</p>
                </div>
                <div className="box-2 p-3 px-3 w-full row-card-content small_font text-center">
                  <p className="small_font">
                    More collegekids Announcement coming soon
                  </p>
                  <div className=" flex-row justify-content-around ">
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                  </div>
                </div>
              </div>{" "}
            </div>
          </section>
          {/* Section 3 */}
          <div className="mt-4">
            <About />
          </div>
        </div>
        {/* Images */}
        <div className="col-md-6 padding-0  text-center overflow-hidden">
          {imageData.map(({ img }, index) => {
            return (
              <Fade key={index} right duration={500} delay={500}>
                <ImageCard image1={img[0]} image2={img[1]} />
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
