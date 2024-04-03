import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import FoodContext from "../context/FoodContext";
import logo from "../pictures/logo.png";
import navBackground from "../pictures/nav-back.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const MyNav = () => {
  // Accessing cartItems from FoodContext
  const { cartItems } = useContext(FoodContext);

  // Styling for navigation bar background
  const navStyle = {
    backgroundImage: `url(${navBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };

  return (
    // Navbar component with background image and other styles
    <Navbar variant="dark" expand="lg" style={navStyle} className="">
      <Container>
        {/* Brand logo as a link to the homepage */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="logo"
            style={{ height: "auto", width: "150px" }}
          />
        </Navbar.Brand>
        {/* Navbar toggle button for mobile view */}
      
        {/* Navbar content when collapsed */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Nav links for main navigation */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu" className="text-light">Menu</Nav.Link>
            <Nav.Link as={Link} to="/reservation" className="text-light">Reservation</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-light">Contact us</Nav.Link>
          </Nav>
          {/* Nav links for additional actions like cart, login, and signup */}
          <Nav>
            {/* Cart link with cart icon and badge showing the number of items in the cart */}
            
            {/* Login link with sign-in icon */}
            <Nav.Link as={Link} to="/login" className="text-light">
              <FontAwesomeIcon icon={faSignInAlt} /> Login
            </Nav.Link>
            {/* Signup link with user-plus icon */}
            <Nav.Link as={Link} to="/signup" className="text-light">
              <FontAwesomeIcon icon={faUserPlus} /> Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
        <Nav.Link as={Link} to="/cart" className="text-light">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
              <span className="badge bg-danger">{cartItems.length}</span>
            </Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default MyNav;
