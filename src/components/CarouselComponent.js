import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel} from 'react-bootstrap';
import Burger from "../pictures/burger.jpg";
import Sandwich from "../pictures/sandwitch-3.jpg";
import Wrap from "../pictures/wrap.jpg";
import { Link } from 'react-router-dom';

const CarouselComponent = () => {

  return (
    <>
      <Carousel interval={2000} style={{ height: "px" }}>
        <Carousel.Item>
          <img
            height={500}
            style={{ width: "100%" }}
            src={Burger}
            alt="Burger"
          />
          <Carousel.Caption>
            <Link to="/menu" className="btn btn-light">Order Now</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height={500}
            style={{ width: "100%" }}
            src={Sandwich}
            alt="sandwich"
          />
          <Carousel.Caption>
            <Link to="/menu" className="btn btn-light">Order Now</Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height={500}
            style={{ width: "100%" }}
            src={Wrap}
            alt="wrap"
          />
          <Carousel.Caption>
            <Link to="/menu"  className="btn btn-light">Order Now</Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselComponent;
