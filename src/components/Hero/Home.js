import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import { motion, useTransform } from "framer-motion";
import { useScrollTransition } from "../../context/ScrollTransitionContext";


function Home() {
  const { scrollYProgress } = useScrollTransition();

  const leftX = useTransform(scrollYProgress, [0, 0.45], ["0%", "-140%"]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.45], ["0%", "140%"]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Container fluid className="home-section" id="hero">
      <motion.div className="home-bg-layer" style={{ opacity: bgOpacity }} />
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <motion.div style={{ x: leftX, opacity: leftOpacity }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
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

                <div className="home-type-wrapper">
                  <Type />
                </div>
              </motion.div>
            </motion.div>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <motion.div style={{ x: rightX, opacity: rightOpacity }}>
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
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
