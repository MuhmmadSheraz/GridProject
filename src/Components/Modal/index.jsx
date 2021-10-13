import React from "react";
import "./style.css";
import Fade from "react-reveal/Fade";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import cancel from "../../Assets/cancel.png";
const index = ({ showModal, setShowModal }) => {
  return (
    <Fade>
      <div className="modalWrapper">
        <div
          className="closeModalButton"
          onClick={() => {
            setShowModal(false);
            document.body.style.overflow = "unset";
          }}
        >
          <img src={cancel} className="cancelImage" />
          <p className="mt-3 mx-2 closeBtn"> Close</p>
        </div>

        <div className="modal_content">
          <h1 className="modalHeading">HOW MANY WOULD YOU LIKE TO MINT?</h1>
          <div className="w-75 py-5">
            <Slider
              handleStyle={{
                borderColor: "black",
                backgroundColor: "black",
              }}
              activeDotStyle={{
                height: "10px",
                width: "10px",
                borderColor: "black",
                backgroundColor: "black",
              }}
              dotStyle={{
                height: "10px",
                width: "10px",
                borderColor: "gray",
                backgroundColor: "gray",
              }}
              trackStyle={{ backgroundColor: "black" }}
              min={20}
              defaultValue={20}
              marks={{ 20: 1, 40: 2, 60: 3, 80: 4, 100: 5 }}
              step={null}
            />
          </div>
          <button className="headerButton mt-5 justify-content-center align-items-center mt-3 text-center">
            MINT
          </button>
        </div>
      </div>
    </Fade>
  );
};

export default index;
