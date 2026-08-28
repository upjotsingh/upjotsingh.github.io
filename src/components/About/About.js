import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import laptopImg from "../../assets/about.png";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { motion, useTransform } from "framer-motion";
import { useScrollTransition } from "../../context/ScrollTransitionContext";

function About() {
  const { boundaryRef, scrollYProgress } = useScrollTransition();

  const headingOpacity = useTransform(scrollYProgress, [0.15, 0.5], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0.15, 0.5], [90, 0]);
  const headingScale = useTransform(scrollYProgress, [0.15, 0.5], [0.85, 1]);

  const imageOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const imageY = useTransform(scrollYProgress, [0.3, 0.6], [60, 0]);

  const cardOpacity = useTransform(scrollYProgress, [0.4, 0.68], [0, 1]);
  const cardY = useTransform(scrollYProgress, [0.4, 0.68], [60, 0]);

  const bodyOpacity = useTransform(scrollYProgress, [0.5, 0.78], [0, 1]);
  const bodyY = useTransform(scrollYProgress, [0.5, 0.78], [50, 0]);

  const avatarOpacity = useTransform(scrollYProgress, [0.58, 0.85], [0, 1]);
  const avatarY = useTransform(scrollYProgress, [0.58, 0.85], [50, 0]);

  return (
    <Container fluid className="about-section" id="about" ref={boundaryRef}>
      <Container>
        <Row>
          <motion.h1
            className="section-heading"
            style={{ opacity: headingOpacity, y: headingY, scale: headingScale }}
          >
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </motion.h1>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px", alignItems: 'center' }}>
          <Col
            md={5}
            className="about-img"
          >
            <motion.div style={{ opacity: imageOpacity, y: imageY }}>
              <img src={laptopImg} alt="about" className="img-fluid" />
            </motion.div>
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingBottom: "50px",
            }}
          >
            <motion.div style={{ opacity: cardOpacity, y: cardY }}>
              <Aboutcard />
            </motion.div>
          </Col>

        </Row>
        <Row style={{ alignItems: 'center' }}>
          <Col md={8} className="home-about-description">
            <motion.div style={{ opacity: bodyOpacity, y: bodyY }}>
              <p className="home-about-body">
                With over <b className="purple">5 years of experience</b> building
                production web applications, I specialize in crafting fast,
                accessible interfaces with
                <i>
                  <b className="purple"> TypeScript, JavaScript, Java and C++. </b>
                </i>
                <br />
                <br />
                My focus is on building client-focused &nbsp;
                <i>
                  <b className="purple">web technologies and products, </b>
                  engineered to be <b className="purple">secure</b> &amp; <b className="purple">test-driven</b> from the start.
                </i>
                <br />
                <br />
                On the backend, I build with <b className="purple">Node.js</b>, and
                on the frontend I reach for
                <i>
                  <b className="purple">
                    {" "}
                    modern JavaScript libraries and frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React and Next.js.</b>
                </i>
              </p>
            </motion.div>
          </Col>
          <Col md={4} className="myAvtar">
            <motion.div style={{ opacity: avatarOpacity, y: avatarY }}>
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </motion.div>
          </Col>
        </Row>
        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
