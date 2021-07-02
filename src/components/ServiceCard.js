import React from "react";
import "../styles/ServiceCard.css";

export default function ServiceCard({icon, title, text}) {
  return (
    <div className="cardContainer">
      <span>{icon}</span>
      <h2>{title}</h2>
      <p className="textContainer">{text}</p>
    </div>
  );
}
