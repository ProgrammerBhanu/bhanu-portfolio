import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { TiHtml5 } from "react-icons/ti";
import { DiJavascript1, DiNodejs, DiMongodb } from "react-icons/di";
import { SiCss3, SiBootstrap } from "react-icons/si";

import mpl from "../../Assets/Projects/mpl.jpg";
import tatacliq from "../../Assets/Projects/tatacliq.jpg";
// import editor from "../../Assets/Projects/codeEditor.png";
import translator from "../../Assets/Projects/translator.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mpl}
              isBlog={false}
              title="MPL - clone"
              description="Using HTML, CSS, Node.js, Express & MongoDB, I have built a clone of MPL.live. Which allows users to win rewards and cash prizes by playing the games of their choice."
              link1="https://github.com/nileshagrawal98/MPL-Cloning"
              link2="https://mplclone.herokuapp.com/"
              i1={<TiHtml5 />}
              i2={<DiJavascript1 />}
              i3={<DiNodejs />}
              i4={<DiMongodb />}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tatacliq}
              isBlog={false}
              title="Tatacliq - clone"
              description="Using HTML, CSS, Advanced JS & LocalStorage, I have built with group of 4, a clone of Tatacliq-clone where users can buy various products."
              link1="https://github.com/ProgrammerBhanu/TataCliq-Project"
              link2="https://programmerbhanu.github.io/TataCliq-Project/main.html"
              i1={<TiHtml5 />}
              i2={<DiJavascript1 />}
              i3={<SiCss3 />}
              i4={<SiBootstrap />}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={translator}
              isBlog={false}
              title="Masai - Translator"
              description="Using HTML, CSS Javascript & API's. A web application that allows users to translate text one language to another.
              "
              link1="https://github.com/ProgrammerBhanu/Masai-Translator"
              link2="https://github.com/ProgrammerBhanu/Masai-Translator"
              i1={<TiHtml5 />}
              i2={<DiJavascript1 />}
              i3={<SiCss3 />}
              i4={<SiBootstrap />}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
