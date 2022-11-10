import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as Icons from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <div>
      <Navbar
        className="bg-light shadow-1-strong"
        variant="dark"
        expand="lg"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand href="/" className="text-dark">
            Ammara
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="text-dark links">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link className="text-dark links">
                <Link to="/about">About</Link>
              </Nav.Link>
              <Nav.Link className="text-dark links">
                <Link to="/resume">Resume</Link>
              </Nav.Link>
              <Nav.Link className="text-dark links">
                <Link to="/project">Projects</Link>
              </Nav.Link>
              <Nav.Link className="text-dark links">
                <Link to="/contact">Contact</Link>
              </Nav.Link>
            </Nav>
            <Nav.Link
              href="https://www.facebook.com/Mariimehar461/"
              target="blank"
              className="text-dark mx-2"
            >
              <Icons.Facebook />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/ammara-salahuddin-b508071b4/"
              target="blank"
              className="text-dark mx-2"
            >
              <Icons.Twitter />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/ammara-salahuddin-b508071b4/"
              target="blank"
              className="text-dark mx-2"
            >
              <Icons.Linkedin />
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/whats_thethought/"
              target="blank"
              className="text-dark mx-2"
            >
              <Icons.Instagram />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Navbars;
