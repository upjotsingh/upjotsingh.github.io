import React from "react";
import { Container, Row } from "react-bootstrap";
import WorkCard from "./WorkCard";
import { WorkJson } from './workJson'
import './work.css'


function Work() {

  return (
    <Container fluid className="work-section" id="work">
      <Container>
        <h1 className="section-heading">
          My <strong className="purple">Work Experience </strong>
        </h1>
        {WorkJson.map(item => (
          <Row style={{ justifyContent: "center" }} className="work-card">
            <WorkCard
              {...item}
            />
          </Row>
        ))}
      </Container>
    </Container>
  );
}

export default Work;
