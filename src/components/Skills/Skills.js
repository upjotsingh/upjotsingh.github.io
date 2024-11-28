import React from "react";
import { Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { skillsJson, toolsJson } from "./skillsJson";

function Skills() {
  const tooltip = (name) => (
    <Tooltip id="tooltip">
      <strong >{name}</strong>
    </Tooltip>
  );
  return (
    <Container id="skills" className="skill-section">

      <h1 className="section-heading">
        Professional <strong className="purple">Skillset </strong>
      </h1>
      <Row className="skill-container">
        {skillsJson.map(item => (
          <Col xs={4} md={1} style={{ position: 'relative' }} key={item.name}>
            <Tilt >
              <OverlayTrigger placement="top" overlay={tooltip(item.name)}>
                <div className="tech-icons">
                  {item.icon}
                </div>
              </OverlayTrigger>
            </Tilt>
          </Col>))}
      </Row>
      <h1 className="section-heading">
        <strong className="purple">Tools</strong> I use
      </h1>
      <Row className="skill-container">
        {toolsJson.map(item => (
          <Col xs={4} md={1} style={{ position: 'relative' }} key={item.name}>
            <Tilt >
              <OverlayTrigger placement="top" overlay={tooltip(item.name)}>
                <div className="tech-icons">
                  {item.icon}
                </div>
              </OverlayTrigger>
            </Tilt>
          </Col>))}
      </Row>
    </Container>

  );
}

export default Skills;
