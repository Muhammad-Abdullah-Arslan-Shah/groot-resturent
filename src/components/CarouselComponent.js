import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Button } from 'react-bootstrap';
import Burger from "../pictures/burger.jpg";
import Sandwich from "../pictures/sandwich.jpg";
import Wrap from "../pictures/wrap.jpg";

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
            <Button variant="light">Order Now</Button>
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
            <Button variant="light">Order Now</Button>
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
            <Button variant="light">Order Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselComponent;
