import React from "react";

const Card = ({ title, description, imageSrc }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{description}</p>
    <img
      src={imageSrc}
      alt="Card background"
      className="object-cover rounded-xl"
    />
  </div>
);

export default Card;
