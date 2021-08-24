import React from "react";
import "../styles/Portfolio.css";
import { Col, Row, Container } from "react-bootstrap";
import ServiceCard from "./ServiceCard";

export default function Portfolio() {
  return (
    <div className="portfolioBackgroundContainer">
      <div className="portfolioContainer" id="servicios">
        <h3>¿QUÉ HACEMOS?</h3>
        <h1>Nuestros Servicios</h1>
        <Container className="containerCard">
          <Row>
            <Col xl={6}>
              <ServiceCard
                icon="images/icons/iconCalificacionBlue.png"
                title="Calificación"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at suspendisse quam adipiscing cursus."
                background="white"
                titleColor="#002963"
              />
            </Col>
            <Col xl={6}>
              <ServiceCard
                icon="images/icons/iconCapacitacionWhite.png"
                title="Capacitación"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at suspendisse quam adipiscing cursus."
                background="#FFAC00"
                textColor="#ffff"
                titleColor="#ffff"
              />
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <ServiceCard
                icon="images/icons/iconAsesoriaBlue.png"
                title="Asesoría"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at suspendisse quam adipiscing cursus."
                background="white"
                titleColor="#002963"
              />
            </Col>
            <Col xl={6}>
              <ServiceCard
                icon="images/icons/iconInspeccionWhite.png"
                title="Inspección"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at suspendisse quam adipiscing cursus."
                background="#FFAC00"
                textColor="#ffff"
                titleColor="#ffff"
              />
            </Col>
            <Col xl={6}>
              <ServiceCard
                icon="images/icons/iconENDsBlue.png"
                title="ENDs"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at suspendisse quam adipiscing cursus."
                background="white"
                titleColor="#002963"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
