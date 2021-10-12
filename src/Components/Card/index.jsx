import React from "react";
import "./style.css";
const index = ({ image, title, name, description }) => {
  return (
    <div className="mx-1 card_image">
      <img src={image} alt="" className="card_image " />
      <h5 className="mt-4">{title}</h5>
      <h1>{name}</h1>
      <p className="about-content card_description">{description}</p>
    </div>
  );
};

export default index;
