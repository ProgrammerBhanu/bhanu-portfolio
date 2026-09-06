import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaJava } from "react-icons/fa";
import {
  SiApachekafka,
  SiCsharp,
  SiDocker,
  SiDotNet,
  SiGit,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiSpring
} from "react-icons/si";

const technologies = [
  [<FaJava />, "Java"],
  [<SiSpring />, "Spring Boot"],
  [<SiCsharp />, "C#"],
  [<SiDotNet />, ".NET"],
  [<SiApachekafka />, "Kafka"],
  [<SiGraphql />, "GraphQL"],
  [<SiPostgresql />, "PostgreSQL"],
  [<SiMongodb />, "MongoDB"],
  [<SiDocker />, "Docker"],
  [<SiGit />, "Git"]
];

function Techstack() {
  return (
    <Row className="technology-grid">
      {technologies.map(([icon, name]) => (
        <Col xs={6} sm={4} md={2} className="tech-icons" key={name}>
          {icon}
          <h5>{name}</h5>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
