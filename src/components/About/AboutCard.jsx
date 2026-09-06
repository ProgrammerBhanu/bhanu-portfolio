import React from "react";
import { Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I’m{" "}
            <span className="purple">Bhanu Pratap Solanki </span>
            — a Software Engineer II based in{" "}
            <span className="purple">Bengaluru, India.</span>
            <br /><br />
            I build backend systems for healthcare products using Java, Spring
            Boot, .NET, Kafka, and GraphQL. My experience spans medication
            alerting, event-driven workflows, concurrency-safe data operations,
            and services that work across SQL and NoSQL stores.
            <br /><br />
            I care about clean boundaries, observable systems, and business
            rules that remain easy to reason about as products scale. At
            Omnicell, that approach earned me a Spot Award for a reusable
            backend library used across microservices.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports and fitness
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing about technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            “Build software people can depend on.”{" "}
          </p>
          <footer className="blockquote-footer">Bhanu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
