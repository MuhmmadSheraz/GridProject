import React from "react";
import Card from "../Card/index";
import Image1 from "../../Assets/im1.png";
import Image6 from "../../Assets/img6.png";
const About = () => {
  return (
    <div>
      <h1 className="display-2 ">ABOUT</h1>
      <h5 className="about-content">
        10,000 CollegeKids receive a mysterious letter in the mail inviting them
        to a Blockchain Internship. They accept and meet the following day at an
        undisclosed location. Upon arrival, a mystifying force begins to pull
        them f rom all directions at once. They are immediately knocked out and
        can't recall anything else. They wake up in the Metaverse and are f ree
        to become whoever they want. Some college kids become rich by selling
        the objects they create. Others become famous by doing interesting thing
      </h5>
      <h5 className="about-content pt-2 font-weight-bold font-weight-bold">
        Who will decide to stay and who will try to escape?
      </h5>
      <div className="d-flex align-items-center mt-5 card_wrapper">
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
      </div>
    </div>
  );
};

export default About;
