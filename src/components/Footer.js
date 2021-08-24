import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footerContainer">
      <span>telefono</span>
      <span>direccion</span>
      <span>ciudad</span>
      <div className="socialIcons">
        <a href="https://www.facebook.com/ingesolda"><FontAwesomeIcon icon={faFacebook} className='socialIcon'/></a>
        <a href="https://www.instagram.com/ingesolda"><FontAwesomeIcon icon={faInstagram} className='socialIcon'/></a>
      </div>
    </div>
  );
};

export default Footer;
