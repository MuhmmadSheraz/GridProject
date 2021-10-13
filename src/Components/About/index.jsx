import React from "react";
import Card from "../Card/index";
import card1 from "../../Assets/card1.svg";
import card2 from "../../Assets/card2.svg";
import Fade from "react-reveal/Fade";
import "./style.css";

const About = () => {
  return (
    <div>
      <Fade top duration={1000} delay={1200}>
        <h1 className="display-2  alignText">ABOUT</h1>
      </Fade>
      <Fade bottom duration={1000} delay={1200}>
        <p className="about-desc">
          10,000 CollegeKids receive a mysterious letter in the mail inviting
          them to a Blockchain Internship. They accept and meet the following
          day at an undisclosed location. Upon arrival, a mystifying force
          begins to pull them from all directions at once. They are immediately
          knocked out and can't recall anything else. They wake up in the
          Metaverse and are f ree to become whoever they want. Some college kids
          become rich by selling the objects they create. Others become famous
          by doing interesting thing
        </p>
        <p className="about-desc-bottom pt-2">
          Who will decide to stay and who will try to escape?
        </p>
      </Fade>
      <div className="d-flex align-items-center mt-5 card_wrapper">
        <Fade left duration={1000} delay={1200}>
          <div style={{ marginRight: "24px" }} className="monoSpace">
            <Card
              image={card1}
              title={"COLLEGE KID # 01"}
              name={"JOSH"}
              description={
                '   "Currently playing poker in the Metaverse with laser eyes... life’s crazy.'
              }
            />
          </div>
          <Card
            image={card2}
            title={"COLLEGE KID # 02"}
            name={"PENN"}
            description={
              "LOOK AT MY WATER GUN!!! PEW PEW PEW!!!HAHAHAHAHAHAHAHA!!!”"
            }
          />
        </Fade>
      </div>
    </div>
  );
};

export default About;
