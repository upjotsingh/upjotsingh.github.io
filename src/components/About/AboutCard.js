import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Upjot Singh</span>, a Software
            Engineer based in <span className="purple">Ontario, Canada.</span>
            <br />
            <br />
            I've spent the last several years building production React and
            Node.js applications for organizations ranging from enterprise
            teams to fast-moving startups, including work on
            government-scale systems serving over a billion users.
            <br />
            <br />
            I hold a Bachelor's of Technology in Computer Science Engineering,
            and I'm currently open to new opportunities where I can bring
            that experience to a team building something meaningful.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
