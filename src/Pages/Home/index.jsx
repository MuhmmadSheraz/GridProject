import logo from "../../Assets/logo.png";
import Navbar from "../../Layout/Navbar/index";
import Image1 from "../../Assets/im1.png";
import Image2 from "../../Assets/img2.png";
import Image3 from "../../Assets/img3.png";
import Image4 from "../../Assets/img4.png";
import Image5 from "../../Assets/img5.png";
import Image6 from "../../Assets/img6.png";
import discord from "../../Assets/discord.png";
import twitter from "../../Assets/twitter.png";
import logoMark from "../../Assets/twitter.png";
import ImageCard from "../../Components/ImageCard/index";
import "bootstrap/dist/js/bootstrap.js";
import "./style.css";
import About from "../../Components/About/index";
function Home() {
  return (
    <div className="container sub_home_wrapper pb-3 d-flex justify-content-center align-items-center flex-column pt-5">
      <div className="row no-gutters justify-content-center  w-100">
        {/* Text */}
        <div className="col-md-6 center padding-0 ">
          <h1 className="header_heading">WELCOME TO COLLEGE KIDS</h1>
          <h3 className="pt-3">
            A collection of 10,000 CollegeKids transported into the Metaverse, a
            place where they can become anything they want
          </h3>
          <button className="nav-button align-self-start mt-3 ">MINT</button>
          <hr className="hr_custom my-5" />
          <div className=" align-self-start">
            <h3>STAY UP TO DATE!</h3>
            <img src={logoMark} className="h-50 mx-1" />
            <img src={discord} className="h-50 mx-1" />
            <img src={twitter} className="h-50 mx-1" />
          </div>
          <hr className="hr_custom my-5" />
          {/* Section 2 */}
          <section className="my-5">
            <h1 className="display-2 ">ROADMAP</h1>
            <div className="row w-full">
              <div className="col-md-6  ">
                <div className="box p-2 w-full">
                  <h4 className="row-card-content">
                    First 500 people in discord get OG role whitelisted to mint.
                  </h4>
                  <p className="date">October 2021</p>
                </div>
                <div className="box p-2 w-full">
                  <h4 className="row-card-content">
                    DAO to be established , allowing for community based voting
                    and decision making to holders.
                  </h4>
                  <p className="date">October 2021</p>
                </div>
                <div className="box p-2 w-full">
                  <h4 className="row-card-content">
                    Create breeding system to create scarcity in the original
                    collection and release new collection of babies available
                    only though breeding
                  </h4>
                  <p className="date">October 2021</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box-2 p-2 w-full">
                  <h4 className="row-card-content">
                    Discord giveaways to be announced.
                  </h4>
                  <p className="date">October 2021</p>
                </div>
                <div className="box-2 p-2 w-full">
                  <h4 className="row-card-content">
                    Launch initial 10,000 CollegeKids
                  </h4>
                  <p className="date">October 2021</p>
                </div>
                <div className="box-2 p-2 w-full">
                  <h4 className="row-card-content">
                    Smart contracts will be deployed, allowing for staking and
                    liquidity pools to yield $DiningDollars
                  </h4>
                  <p className="date">November 2021</p>
                </div>
                <div className="box-2 p-2 w-full">
                  <h4>More collegekids announcements coming soon</h4>
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
          <div className="mt-5">
            <About />
          </div>
        </div>
        {/* Images */}
        <div className="col-md-6 padding-0   ">
          {Array(7)
            .fill()
            .map((x) => {
              return <ImageCard image1={Image1} image2={Image3} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
