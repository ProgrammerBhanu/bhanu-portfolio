import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { SiGithub } from "react-icons/si";
import { RiEarthFill } from "react-icons/ri";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button
          size="sm"
          className="mr-2"
          variant="primary"
          href={props.link1}
          target="_blank"
        >
          <SiGithub /> &nbsp;
          {props.isBlog ? "View Blog" : "View Source"}
        </Button>
        <Button variant="primary" href={props.link2} size="sm" target="_blank">
          <RiEarthFill /> &nbsp;
          {props.isBlog ? "View Blog" : "Deployment"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
