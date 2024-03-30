import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../pictures/logo.png";
import navBackground from "../pictures/nav-back.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const NavigationBar = () => {
  const navStyle = {
    backgroundImage: `url(${navBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };

  return (
    <Navbar variant="dark" expand="lg" style={navStyle}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="logo"
            style={{ height: "auto", width: "150px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-light">Home</Nav.Link>
            <Nav.Link href="/menu" className="text-light">Menu</Nav.Link>
            <Nav.Link href="/about"className="text-light">About</Nav.Link>
            <Nav.Link href="/reservation" className="text-light">Reservation</Nav.Link>
            <Nav.Link href="/contact" className="text-light">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="text-light" href="/cart">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
            </Nav.Link>
            <Nav.Link  className="text-light" href="/login">
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </Nav.Link>
            <Nav.Link className="text-light" href="/signup">
              <FontAwesomeIcon icon={faUserPlus} /> Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
