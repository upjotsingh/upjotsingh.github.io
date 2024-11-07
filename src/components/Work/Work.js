import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkCard from "./WorkCard";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { WorkJson } from './workJson'


function Work() {
  return (
    <Container fluid className="work-section" id="work">
      <Container>
        <h1 className="section-heading">
          My Recent <strong className="purple">Work Experience </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {WorkJson.map(item => (<Col md={4} className="work-card">
            <WorkCard
              {...item}
            />
          </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Work;
