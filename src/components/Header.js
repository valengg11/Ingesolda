import React from "react";
import "../styles/Header.css";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <div className="navbarContainer">
      <Navbar
        className="navbar fixed-top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Navbar.Brand href="#home">
          <img
            src="../images/Logo_empresarial.png"
            className="d-inline-block align-top logoIngesolda"
            alt="Tarifast Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav navbar-expand-md" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto navbar-expand-md justify-content-end">
            <Nav.Link className="menuItem" href="#home">
              Acerca
            </Nav.Link>
            <Nav.Link className="menuItem" href="#comparador">
              Servicios
            </Nav.Link>
            <Nav.Link className="menuItem" href="#nosotros">
              Contacto
            </Nav.Link>
            <Nav.Link className="menuItem" href="#contacto">
                <span className="blogSpan">
                   BLOG  
                </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
