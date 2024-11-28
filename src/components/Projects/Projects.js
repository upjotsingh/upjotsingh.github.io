import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { projectJson } from "./projectJson";

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
              imgPath={chatify}
              isBlog={false}
              title={item.projName}
              description={item.projDesc}
              gitLink={item.gitLink}
              demoLink={item.demoLink}
            />
          </Col>))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
