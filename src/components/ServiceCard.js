import React from "react";
import styled from "styled-components";
import "../styles/ServiceCard.css";

export default function ServiceCard({
  icon,
  title,
  text,
  background,
  textColor,
  titleColor,
}) {
  const Card = styled.div`
    background: ${background};
    color: ${textColor};
  `;
  const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: ${titleColor};
  `;
  return (
    <Card className="cardContainer">
      <img src={icon} width="65" height="70" className="icono" alt='service_icon'/>
      <div>
        <Title>{title}</Title>
        <p className="textContainer">{text}</p>
      </div>
    </Card>
  );
}
