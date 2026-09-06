import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiDocker,
  SiGithub,
  SiIntellijidea,
  SiJetbrains,
  SiPostman,
  SiVisualstudiocode
} from "react-icons/si";

const tools = [
  [<SiGithub />, "GitHub"],
  [<SiDocker />, "Docker"],
  [<SiPostman />, "Postman"],
  [<SiIntellijidea />, "IntelliJ IDEA"],
  [<SiJetbrains />, "Rider"],
  [<SiVisualstudiocode />, "VS Code"]
];

function Toolstack() {
  return (
    <Row className="technology-grid tools-grid">
      {tools.map(([icon, name]) => (
        <Col xs={6} sm={4} md={2} className="tech-icons" key={name}>
          {icon}
          <h5>{name}</h5>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
