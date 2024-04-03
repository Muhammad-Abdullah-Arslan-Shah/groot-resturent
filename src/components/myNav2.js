import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FoodContext from "../context/FoodContext";
import logo from "../pictures/logo.png";
import navBackground from "../pictures/nav-back.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSignInAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const MyNav= () => {
    const { cartItems } = useContext(FoodContext);

    const navStyle = {
      backgroundImage: `url(${navBackground})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };
  
  return (
    <div className='container'>
      <Navbar variant="dark" expand="lg" className="sticky-top" style={navStyle}> 
      <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" style={{ height: "auto", width: "150px" }} />
          </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/menu" className="nav-link">Menu</Link>
            <Link to="/reservation" className="nav-link">Reservation</Link>
            <Link to="/contact" className="nav-link">Contact us</Link>
            <Link to="/login" className="nav-link">
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Link>
                <Link to="/signup" className="nav-link">
                  <FontAwesomeIcon icon={faUserPlus} /> Signup
                </Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
        <Link to="/cart" className="nav-link">
                  <FontAwesomeIcon icon={faShoppingCart} /> Cart
                  <span className="badge bg-danger">{cartItems.length}</span>
                </Link>
                </Nav>
      </Navbar>
    </div>
  );
};

export default MyNav;
