import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { TiHtml5 } from "react-icons/ti";
import { DiJavascript1, DiNodejs, DiMongodb, DiReact } from "react-icons/di";
import { SiCss3, SiBootstrap, SiRedux } from "react-icons/si";

import mpl from "../../Assets/Projects/mpl.jpg";
import tatacliq from "../../Assets/Projects/tatacliq.jpg";
// import editor from "../../Assets/Projects/codeEditor.png";
import translator from "../../Assets/Projects/translator2.jpg";

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
              imgPath={
                "https://rawcdn.githack.com/ProgrammerBhanu/bhanu-portfolio/331756c9838f1aa5ab0843b90bd97ab1aec0ef6b/src/Assets/Projects/mpl.jpg"
              }
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
              imgPath={
                "https://rawcdn.githack.com/ProgrammerBhanu/bhanu-portfolio/331756c9838f1aa5ab0843b90bd97ab1aec0ef6b/src/Assets/Projects/tatacliq.jpg"
              }
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
              title="Meesho - Clone"
              description="Using React, Redux, Node.js, Express.js & MongoDB, I have built with group of 5, a clone of Meesho-clone where users can buy various products."
              link1="https://github.com/ProgrammerBhanu/meesho-clone"
              link2="https://meesho-clone.vercel.app/"
              i1={<DiReact />}
              i2={<SiRedux />}
              i3={<DiNodejs />}
              i4={<DiMongodb />}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
