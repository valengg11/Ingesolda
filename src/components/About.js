import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="aboutBackgroundContainer">
      <div className="aboutContainer">
        <div className="aboutLeftContainer">
          <h3 id="acerca">¡CONÓCENOS!</h3>
          <h1 className="aboutTitle">
            Quiénes <br /> somos
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>
        <div className="aboutImageContainer">
          <div className="aboutImage" />
        </div>
      </div>
      <img src="images/about/Ingesolda_Logo_Helmet_Half.png" height="650px" alt='logo_ingesolda_helmet'/>
    </div>
  );
}
