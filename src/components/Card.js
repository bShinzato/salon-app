import React from "react";
import { Link } from "react-router-dom";
const Card = ({ title, description, imageSrc }) => (
  <Link to="/Services">
  <div className="card">
    <h2>{title}</h2>
    <p>{description}</p>
    <img
      src={imageSrc}
      alt="Card background"
      className="object-cover rounded-xl"
    />

  </div>
  </Link>

);

export default Card;
