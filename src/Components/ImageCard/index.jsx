import React from "react";
import "./style.css";
const index = ({ image1, image2 }) => {
  return (
    <div className="row no-gutters justify-content-center w-full card_Wrapper_Col   ">
      <div className="col-sm-6  justify-content-center mr-3">
        <img src={image1} className="image_height " alt="" />
      </div>
      <div className="col-sm-6  justify-content-center mr">
        <img src={image2} className="image_height " alt="" />
      </div>
    </div>
  );
};

export default index;
