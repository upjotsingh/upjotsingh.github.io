import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "../About/Home2";
import Type from "./Type";
import { motion } from "framer-motion";


function Home() {
  return (
    <Container fluid className="home-section" id="hero">
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name">
              I'M
              <strong className="main-name"> Upjot Singh</strong>
            </h1>

            <div style={{ padding: 50, textAlign: "left" }}>
              <Type />
            </div>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            < motion.img
              animate={{ x: [300, -10, 0] }}
              viewport={{ once: true }}
              whileInView={true}
              transition={{
                duration: 3, type: 'ease',
              }}
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
