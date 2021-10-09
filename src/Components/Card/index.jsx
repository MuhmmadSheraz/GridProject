import React from "react";
import "./style.css";
const index = ({ image, title, name, description }) => {
  return (
    <div className="w-75 mx-1">
      <img src={image} alt="" className="w-100" />
      <h5 className="my-1">{title}</h5>
      <h1>{name}</h1>
      <p className="about-content ">{description}</p>
    </div>
  );
};

export default index;
