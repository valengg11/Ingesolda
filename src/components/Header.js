import React from "react";
import "../styles/Header.css";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    // <div className="navbarContainer">
      <Navbar
        className="navbar fixed-top navbarMobile"
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand href="#home">
          <img
            src="images/Logo_empresarial.png"
            className="d-inline-block align-top logoIngesolda"
            alt="Ingesolda Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav navbar-expand-md" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav className="ml-auto navbar-expand-md justify-content-end">
            <Nav.Link className="menuItem" href="#acerca">
              Acerca
            </Nav.Link>
            <Nav.Link className="menuItem" href="#servicios">
              Servicios
            </Nav.Link>
            <Nav.Link className="menuItem" href="#contacto">
              Contacto
            </Nav.Link>
            <Nav.Link className="menuItem" href="#blog">
                <span className="blogSpan">
                   BLOG  
                </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    // </div>
  );
}
