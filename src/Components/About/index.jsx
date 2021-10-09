import React from "react";
import Card from "../Card/index";
import Image1 from "../../Assets/im1.png";
import Image6 from "../../Assets/img6.png";
import Fade from "react-reveal/Fade";

import "./style.css";
const About = () => {
  return (
    <div>
      <Fade top duration={1000} delay={1200}>
        <h1 className="display-2 ">ABOUT</h1>
      </Fade>
      <Fade bottom duration={1000} delay={1200}>
        <h5 className="about-content">
          10,000 CollegeKids receive a mysterious letter in the mail inviting
          them to a Blockchain Internship. They accept and meet the following
          day at an undisclosed location. Upon arrival, a mystifying force
          begins to pull them f rom all directions at once. They are immediately
          knocked out and can't recall anything else. They wake up in the
          Metaverse and are f ree to become whoever they want. Some college kids
          become rich by selling the objects they create. Others become famous
          by doing interesting thing
        </h5>
        <h5 className="about-content pt-2 font-bold">
          Who will decide to stay and who will try to escape?
        </h5>
      </Fade>
      <div className="d-flex align-items-center mt-5 card_wrapper">
        <Fade left duration={1000} delay={1200}>
          <Card
            image={Image1}
            title={"COLLEGE KID # 01"}
            name={"JOSH"}
            description={
              '   "Currently playing poker in the Metaverse with laser eyes... life’s crazy.'
            }
          />
          <Card
            image={Image6}
            title={"COLLEGE KID # 02"}
            name={"PENN"}
            description={
              '"YOOOOOO LOOK AT ME IM A FU**ING ALIEN HAHAHAHAHAHAHAH!”.'
            }
          />
        </Fade>
      </div>
    </div>
  );
};

export default About;
