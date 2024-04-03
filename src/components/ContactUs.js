import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container className="py-5 text-light">
      <h2 className="text-center mb-4 font-effect-fire " style={{ fontSize: "60px" }}>Contact Us</h2>
      <Row>
        <Col md={6}>
          <h4>Get in Touch</h4>
          <p>We're here to help and answer any question you might have. We look forward to hearing from you.</p>
          <ul className="list-unstyled">
            <li><strong>Phone:</strong> +92 323 1487456</li>
            <li><strong>Email:</strong> info@groot.pk</li>
            <li><strong>Address:</strong> Barki Rd, Block J Park View CHS, Near Paragon City Gate#1, Lahore, Punjab, Lahore 54000</li>
          </ul>
        </Col>
        <Col md={6}>
          <h4>Send Us a Message</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="light" type="submit" className="mt-4">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
