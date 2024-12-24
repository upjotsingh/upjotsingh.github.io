import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../assets/projects/leaf.png";
import emotion from "../../assets/projects/emotion.png";
import editor from "../../assets/projects/codeEditor.png";
import chatify from "../../assets/projects/chatify.png";
import suicide from "../../assets/projects/suicide.png";
import bitsOfCode from "../../assets/projects/blog.png";
import { projectJson } from "./projectJson";
import './project.css'


function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Container>
        <h1 className="section-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectJson.map(item => (<Col md={4} className="project-card">
            <ProjectCard
              img={item.img}
              isBlog={false}
              title={item.projName}
              description={item.projDesc}
              gitLink={item.gitLink}
              demoLink={item.demoLink}
              shortDesc={item.projShortDesc}
              projTech={item.projTech}
              projIcon={item.projIcon}
            />
          </Col>))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
