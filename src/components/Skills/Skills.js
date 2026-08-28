import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { skillsJson, toolsJson } from "./skillsJson";
import TooltipComp from "../tooltip/Tooltip";
import Reveal from "../Reveal";

function Skills() {
  return (
    <Container id="skills" className="skill-section">

      <Reveal as="h1" className="section-heading">
        Professional <strong className="purple">Skillset </strong>
      </Reveal>
      <Row className="skill-container">
        {skillsJson.map((item, index) => (
          <Col xs={4} md={1} style={{ position: 'relative' }} key={item.name}>
            <Reveal delay={Math.min(index, 10) * 0.04} y={16}>
              <Tilt >
                <TooltipComp title={item.name}>
                  <div className="tech-icons">
                    {item.icon}
                  </div>
                </TooltipComp>
              </Tilt>
            </Reveal>
          </Col>))}
      </Row>
      <Reveal as="h1" className="section-heading">
        <strong className="purple">Tools</strong> I use
      </Reveal>
      <Row className="skill-container">
        {toolsJson.map((item, index) => (
          <Col xs={4} md={1} style={{ position: 'relative' }} key={item.name}>
            <Reveal delay={Math.min(index, 10) * 0.04} y={16}>
              <Tilt >
                <TooltipComp title={item.name}>
                  <div className="tech-icons">
                    {item.icon}
                  </div>
                </TooltipComp>
              </Tilt>
            </Reveal>
          </Col>))}
      </Row>
    </Container>

  );
}

export default Skills;
