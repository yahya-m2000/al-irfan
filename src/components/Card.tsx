import React from "react";

type CardProps = {
  title: string;
  description: string;
  image: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div
      style={{ backgroundColor: "lightblue", padding: "20px", margin: "10px" }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
