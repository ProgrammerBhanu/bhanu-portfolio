import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGithub,
  SiVisualstudiocode,
  SiJupyter,
  SiPostman,
  SiHeroku
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <h5>Github</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5>VS-Code</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <h5>Jupyter</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h5>Postman</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <h5>Heroku</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
