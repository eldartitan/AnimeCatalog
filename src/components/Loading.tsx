/** @format */

import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <>
      <Row className="align-middle text-center">
        <Col></Col>
        <Col>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}
