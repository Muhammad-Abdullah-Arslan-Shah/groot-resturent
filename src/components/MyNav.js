import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
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
    <div style={navStyle}>
    <Navbar variant="dark" expand="lg" className="p-3 fs-5">
      
        {/* Brand logo as a link to the homepage */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="logo"
            style={{ height: "auto", width: "150px" }}
            
          />
        </Navbar.Brand>
        {/* Navbar toggle button for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Navbar content when collapsed */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Nav links for main navigation */}
          <Nav className="me-auto mr-2 mt-2">
            <Nav.Link as={Link} to="/" className="text-light">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu" className="text-light">Menu</Nav.Link>
            <Nav.Link as={Link} to="/reservation" className="text-light">Reservation</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-light">Contact us</Nav.Link>
          </Nav>
          {/* Nav links for additional actions like cart, login, and signup */}
          <Nav>
            <Nav.Link as={Link} to="/cart" className="text-light mr-2">
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
              <span className="badge bg-danger">{cartItems.length}</span>
            </Nav.Link>
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
      
    </Navbar>
    </div>
  );
};

export default MyNav;
