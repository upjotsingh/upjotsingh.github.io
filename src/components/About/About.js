import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import laptopImg from "../../assets/about.png";
import Home2 from "./Home2";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <Row>
          <h1 className="section-heading">
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px", alignItems: 'center' }}>
          <Col
            md={5}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingBottom: "50px",
            }}
          >
            <Aboutcard />
          </Col>

        </Row>
        <Row style={{ alignItems: 'center' }}>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
              I fell in love with programming and I have learned
              so much… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Typescript, Javascript, Java and C++. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building client-focused &nbsp;
              <i>
                <b className="purple">Web Technologies and Products, </b>
                ensuring <b className="purple"> Secure </b> &amp; <b className="purple"> Test-driven </b> applications.
              </i>
              <br />
              <br />
              I'm passionate for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> ReactJs and NextJs.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
