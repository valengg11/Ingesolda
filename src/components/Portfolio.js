import React from "react";
import "../styles/Portfolio.css";
import { Col, Row, Container } from "react-bootstrap";
import Title from "./Title";
import ServiceCard from "./ServiceCard";

export default function Portfolio() {
  return (
    <div className="portfolioContainer" id='servicios'>
      <Title title="PORTAFOLIO" />
      <Container className='containerCard'>
        <Row>
          <Col lg={6}>
            <ServiceCard icon="" title="Servicio 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at suspendisse quam adipiscing cursus." />
          </Col>
          <Col lg={6}>
            <ServiceCard icon="" title="Servicio 2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at suspendisse quam adipiscing cursus." />
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <ServiceCard icon="" title="Servicio 3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at suspendisse quam adipiscing cursus." />
          </Col>
          <Col lg={6}>
            <ServiceCard icon="" title="Servicio 4" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at suspendisse quam adipiscing cursus." />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
