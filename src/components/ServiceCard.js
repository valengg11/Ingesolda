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
    width: 410px;
    height: 190px;
    background: ${background};
    border-radius: 60px 0 60px 0;
    box-shadow: 0px 4px 15px 0px #efefef;
    padding: 30px;
    margin: 20px auto;
    display: flex;
    color: ${textColor};
  `;
  const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: ${titleColor};
  `;
  return (
    <Card className="cardContainer">
      <img src={icon} width="65" height="70" className="icono" />
      <div>
        <Title>{title}</Title>
        <p className="textContainer">{text}</p>
      </div>
    </Card>
  );
}
