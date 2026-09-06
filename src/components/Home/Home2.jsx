import React from "react";
import { Container } from "react-bootstrap";
import { FiArrowUpRight, FiCheckCircle, FiLayers, FiRadio, FiShield } from "react-icons/fi";
import { getCompletedExperienceYears } from "../../utils/experience";

const experience = [
  {
    role: "Software Engineer II",
    company: "Omnicell",
    period: "Aug 2024 — Present",
    summary:
      "Backend engineer on the Medication Management team, designing configurable alerting and queue workflows that help clinical teams make safer, faster decisions.",
    impact: [
      "Built rule-based filtering and frequency controls to reduce alert fatigue.",
      "Improved medication-history reliability across SQL Server and ClickHouse.",
      "Resolved concurrency issues with retry-safe writes and versioning strategies."
    ]
  },
  {
    role: "Software Engineer I",
    company: "Omnicell",
    period: "Apr 2022 — Jul 2024",
    summary:
      "Developed alerting and medication-tracking microservices using Java, Spring Boot, Kafka, GraphQL, and MongoDB for hospital care platforms.",
    impact: [
      "Delivered deeply nested GraphQL APIs for real-time patient-specific alerts.",
      "Introduced Kafka workflows for decoupled alert events across services.",
      "Modularized frequency-aware business rules for medication warnings."
    ]
  }
];

const expertise = [
  {
    icon: <FiLayers />,
    title: "Backend architecture",
    text: "Clean, testable services across monoliths and microservices, built for performance and long-term change."
  },
  {
    icon: <FiRadio />,
    title: "Event-driven systems",
    text: "Asynchronous workflows and resilient service communication using Kafka, listeners, and handlers."
  },
  {
    icon: <FiShield />,
    title: "Reliable healthcare software",
    text: "Auditable alerting, concurrency-safe data flows, and operational visibility for high-trust environments."
  }
];

function Home2() {
  const experienceYears = getCompletedExperienceYears();

  return (
    <main className="professional-home">
      <Container className="impact-strip" aria-label="Career highlights">
        <div><strong>{experienceYears}+</strong><span>Years in backend engineering</span></div>
        <div><strong>2</strong><span>Core ecosystems: Java & .NET</span></div>
        <div><strong>1</strong><span>Spot Award for engineering impact</span></div>
      </Container>

      <Container className="experience-section" id="experience">
        <div className="section-intro">
          <span className="section-eyebrow">Selected experience</span>
          <h2>Engineering systems that stay dependable under pressure.</h2>
          <p>
            My work sits where distributed systems, complex business rules, and
            patient safety meet.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-card" key={item.role}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-meta">
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <strong>{item.company} · Bengaluru</strong>
              </div>
              <div className="experience-details">
                <p>{item.summary}</p>
                <ul>
                  {item.impact.map((point) => (
                    <li key={point}><FiCheckCircle /> {point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>

      <Container className="expertise-section">
        <div className="section-intro compact">
          <span className="section-eyebrow">What I bring</span>
          <h2>Backend depth with a product mindset.</h2>
        </div>
        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="expertise-card" key={item.title}>
              <div className="expertise-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </Container>

      <Container className="connect-banner">
        <div>
          <span className="section-eyebrow">Let’s connect</span>
          <h2>Interested in reliable systems and meaningful engineering?</h2>
        </div>
        <a
          href="https://www.linkedin.com/in/bhanu-pratap-solanki-58a74819a/"
          target="_blank"
          rel="noreferrer"
        >
          Start a conversation <FiArrowUpRight />
        </a>
      </Container>
    </main>
  );
}

export default Home2;
