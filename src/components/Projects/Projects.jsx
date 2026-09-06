import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { TiHtml5 } from "react-icons/ti";
import { DiJavascript1, DiNodejs, DiMongodb, DiReact } from "react-icons/di";
import { SiCss3, SiBootstrap, SiRedux } from "react-icons/si";
import { SiApachekafka, SiSwift } from "react-icons/si";
import { FiRadio } from "react-icons/fi";

// import editor from "../../Assets/Projects/codeEditor.png";
// import translator from "../../Assets/Projects/translator2.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="projects-intro">
          <span className="section-eyebrow">Things I’ve built</span>
          <h1 className="project-heading">
            Engineering ideas into <strong className="purple">useful products.</strong>
          </h1>
          <p>
            Developer tools and product experiments across distributed messaging,
            native iOS, and full-stack web engineering.
          </p>
        </div>
        <Row className="featured-project-grid">
          <Col md={6} className="project-card">
            <ProjectCard
              featured
              variant="kafka"
              eyebrow="Messaging infrastructure"
              coverIcon={<><SiApachekafka /><FiRadio /></>}
              title="Kafka Local Console"
              description="A macOS-friendly developer console for Kafka and MQTT. Create and inspect topics, publish structured events, monitor live consumer streams, restore producer presets, and browse message data from one focused interface."
              link1="https://github.com/ProgrammerBhanu/kafka-local-console"
              technologies={["Node.js", "KafkaJS", "Kafka", "MQTT", "Docker"]}
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              featured
              variant="ios"
              eyebrow="Native mobile product"
              coverIcon={<SiSwift />}
              title="OpenDash iOS"
              description="A native SwiftUI companion for riders with OSRM route planning, vehicle and garage tracking, fuel and expense insights, CSV export, wallpaper controls, and Keychain-backed Wi-Fi credentials."
              link1="https://github.com/ProgrammerBhanu/OpenDash-iOS"
              technologies={["SwiftUI", "MapKit", "OSRM", "Keychain", "iOS 17"]}
            />
          </Col>
        </Row>

        <div className="project-subheading">
          <span>Earlier work</span>
          <p>Full-stack builds that established my product foundations.</p>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              variant="web"
              eyebrow="Node.js web app"
              coverIcon={<DiNodejs />}
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
              variant="web"
              eyebrow="Frontend commerce"
              coverIcon={<TiHtml5 />}
              isBlog={false}
              title="Tatacliq - clone"
              description="Using HTML, CSS, Advanced JS & LocalStorage, I have built with group of 4, a clone of Tatacliq-clone where users can buy various products."
              link1="https://github.com/ProgrammerBhanu/TataCliq-Project"
              link2="https://programmerbhanu.github.io/TataCliq-Project/"
              i1={<TiHtml5 />}
              i2={<DiJavascript1 />}
              i3={<SiCss3 />}
              i4={<SiBootstrap />}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              variant="web"
              eyebrow="Full-stack commerce"
              coverIcon={<DiReact />}
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
