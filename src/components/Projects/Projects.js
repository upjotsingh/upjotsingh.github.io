import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { projectJson } from "./projectJson";
import './project.css'
import Reveal from "../Reveal";


function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Container>
        <Reveal as="h1" className="section-heading">
          My Recent <strong className="purple">Projects </strong>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ color: "var(--text-secondary)" }}>
            Here are a few projects I've worked on recently.
          </p>
        </Reveal>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectJson.map((item, index) => (<Col md={4} className="project-card" key={item.projName}>
            <Reveal delay={Math.min(index, 3) * 0.1} y={40}>
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
            </Reveal>
          </Col>))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
