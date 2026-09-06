import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { SiGithub } from "react-icons/si";
import { RiEarthFill } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";

function ProjectCards(props) {
  return (
    <Card className={`project-card-view ${props.featured ? "featured-project" : ""}`}>
      {props.imgPath ? (
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={`${props.title} project preview`}
        />
      ) : (
        <div className={`project-cover project-cover-${props.variant || "default"}`}>
          <span>{props.eyebrow}</span>
          <div className="project-cover-icon">{props.coverIcon}</div>
          <div className="project-cover-lines" aria-hidden="true">
            <i /><i /><i />
          </div>
        </div>
      )}

      <Card.Body>
        {props.featured && <span className="featured-label">Featured project</span>}
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="project-description">{props.description}</Card.Text>

        {props.technologies && (
          <div className="project-tags">
            {props.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        )}

        <div className="project-actions">
          <Button
            size="sm"
            variant="primary"
            href={props.link1}
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub /> {props.isBlog ? "View Blog" : "View Source"} <FiArrowUpRight />
          </Button>
          {props.link2 && (
            <Button
              variant="primary"
              href={props.link2}
              size="sm"
              target="_blank"
              rel="noreferrer"
            >
              <RiEarthFill /> {props.isBlog ? "View Blog" : "Deployment"}
            </Button>
          )}
        </div>
      </Card.Body>

      {!props.technologies && (
        <Row className="tech-row">
          {[props.i1, props.i2, props.i3, props.i4].map((icon, index) => (
            <Col xs={4} md={4} className="tech-icons1" key={index}>
              {icon}
            </Col>
          ))}
        </Row>
      )}
    </Card>
  );
}

export default ProjectCards;
