import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Reveal from "./Reveal";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Reveal>
        <Row>
          <Col md="12">
            <ul className="home-about-social-links footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/upjotsingh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/upjotsingh28/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:upjot.28@gmail.com"
                  className="icon-colour home-social-icons"
                  aria-label="Email"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md="12" className="footer-copywright">
            <h3>
              Designed &amp; built by Upjot Singh &copy; {year}
            </h3>
          </Col>
        </Row>
      </Reveal>
    </Container>
  );
}

export default Footer;
