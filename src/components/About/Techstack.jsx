import React from "react";
import { Col, Row } from "react-bootstrap";
import { TiHtml5 } from "react-icons/ti";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiMysql
} from "react-icons/di";
import { SiCss3, SiRedux } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TiHtml5 />
        <h5>HTML</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <h5>CSS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>Javascript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5>Nodejs</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h5>MongoDB</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5>React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h5>Python</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h5>Redux</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h5>Git</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h5>Mysql</h5>
      </Col>
    </Row>
  );
}

export default Techstack;
