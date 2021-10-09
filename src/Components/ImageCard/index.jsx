import React from "react";

const index = ({ image1, image2 }) => {
  return (
    <div className="row no-gutters justify-content-center  ">
      <div className="col-md-6 px-1 justify-content-center ">
        <img src={image1} className="w-full image_height" alt="" />
      </div>
      <div className="col-md-6 px-1 justify-content-center">
        <img src={image2} className="w-full image_height" alt="" />
      </div>
    </div>
  );
};

export default index;
