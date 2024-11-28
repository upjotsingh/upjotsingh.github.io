import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Upjot Singh </span>
            from <span className="purple"> Ontario, Canada.</span>
            <br />
            <br />
            I am currently employed as a Software Engineer at Tata Consultancy Services.
            <br />
            <br />
            I have completed Bachelor's of Technology in Computer Science Engineering.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
