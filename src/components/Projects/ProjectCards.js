import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.gitLink && (<Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;Github
        </Button>)}


        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaExternalLinkAlt /> &nbsp; Preview
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
