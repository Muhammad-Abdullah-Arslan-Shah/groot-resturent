import React from "react";
import { Form, Button } from "react-bootstrap";

const Reservation = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="container mt-4 mx-5 mb-2">
      <h2 className="text-center font-effect-fire-animation my-4" style={{ fontSize: "60px" }}>Make a Reservation</h2>
        <Form className="font-effect-outline   border border-warning p-5" >
        
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Reservation Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTime">
            <Form.Label>Reservation Time</Form.Label>
            <Form.Control type="time" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPartySize">
            <Form.Label>Party Size</Form.Label>
            <Form.Control type="number" min="1" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Special Requests</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Any special requests or comments" />
          </Form.Group>

          <Button className="m-2" variant="light" type="submit">
            Submit Reservation
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Reservation;
