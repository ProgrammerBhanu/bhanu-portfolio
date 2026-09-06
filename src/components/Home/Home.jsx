import React from "react";
import { Container } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import profileImage from "../../Assets/dp2.png";
import resume from "../../Assets/Bhanu_Solanki_Experience.pdf";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { getCompletedExperienceYears } from "../../utils/experience";

const skills = ["Java", "Spring Boot", ".NET", "Kafka", "GraphQL", "PostgreSQL"];

function Home() {
  const experienceYears = getCompletedExperienceYears();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content professional-hero">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="status-dot" /> Software Engineer II at Omnicell
            </div>

            <h1 className="hero-title">
              Building reliable backend systems for
              <span> real-world healthcare.</span>
            </h1>

            <p className="hero-summary">
              I’m Bhanu Solanki, a backend engineer with {experienceYears}+ years of experience
              designing scalable, event-driven systems across Java and .NET.
              I turn complex medication workflows into dependable software for
              clinical teams.
            </p>

            <div className="hero-typewriter">
              <Type />
            </div>

            <div className="hero-skills" aria-label="Core technologies">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <div className="hero-actions">
              <a
                className="primary-action"
                href="https://www.linkedin.com/in/bhanu-pratap-solanki-58a74819a/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn /> Connect on LinkedIn <FiArrowUpRight />
              </a>
              <a className="secondary-action" href={resume} target="_blank" rel="noreferrer">
                <AiOutlineDownload /> View résumé
              </a>
            </div>

            <p className="hero-location">
              <FiMapPin /> Bengaluru, India · Building systems that clinicians can trust
            </p>
          </div>

          <div className="hero-visual" aria-label="Bhanu Solanki profile highlights">
            <div className="portrait-halo" aria-hidden="true" />
            <div className="portrait-card">
              <img src={profileImage} alt="Bhanu Solanki" />
            </div>
            <div className="floating-card floating-card-years">
              <strong>{experienceYears}+</strong>
              <span>years of experience</span>
            </div>
            <div className="floating-card floating-card-award">
              <span className="award-mark">✦</span>
              <div>
                <strong>Spot Award</strong>
                <span>Engineering impact</span>
              </div>
            </div>
          </div>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
