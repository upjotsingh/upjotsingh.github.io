import React from "react";
import { Container, Row } from "react-bootstrap";
import WorkCard from "./WorkCard";
import { WorkJson } from './workJson'
import './work.css'
import Reveal from "../Reveal";


function Work() {

  return (
    <Container fluid className="work-section" id="work">
      <Container>
        <Reveal as="h1" className="section-heading">
          My <strong className="purple">Work Experience </strong>
        </Reveal>
        {WorkJson.map((item, index) => (
          <Row style={{ justifyContent: "center" }} className="work-card" key={item.companyName}>
            <Reveal delay={Math.min(index, 3) * 0.08}>
              <WorkCard
                {...item}
              />
            </Reveal>
          </Row>
        ))}
      </Container>
    </Container>
  );
}

export default Work;
