import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function Intro() {
  const [counter, setCounter] = useState(0);

  function decrementCounter() {
    setCounter(counter - 1);
  }

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Row>
        <Col>
          <h2 className="text-center">Just Another Page</h2>
          <p className="text-center display-4">{counter}</p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            variant="primary"
            className="m-2"
            onClick={() => setCounter(counter + 1)}
          >
            Increment
          </Button>
          <Button variant="warning" className="m-2" onClick={decrementCounter}>
            Decrement
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
