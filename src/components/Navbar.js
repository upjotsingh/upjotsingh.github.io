import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link, Router } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,

} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { Container } from "react-bootstrap";
import { HashLink, NavHashLink } from "react-router-hash-link";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container fluid>
        <HashLink smooth to='#hero' className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </HashLink>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <NavHashLink smooth to="#hero" onClick={() => updateExpanded(false)} className='nav-link'>
                Home
              </NavHashLink>
            </Nav.Item>

            <Nav.Item>
              <NavHashLink
                smooth
                to="#about"
                className='nav-link'
                onClick={() => updateExpanded(false)}
              >
                About
              </NavHashLink>
            </Nav.Item>
            <Nav.Item>
              <NavHashLink
                smooth
                to="#skills"
                className='nav-link'
                onClick={() => updateExpanded(false)}
              >
                Skills
              </NavHashLink>
            </Nav.Item>

            <Nav.Item>
              <NavHashLink
                smooth
                to="#work"
                className='nav-link'
                onClick={() => updateExpanded(false)}
              >
                Work
              </NavHashLink>
            </Nav.Item>

            <Nav.Item>
              <NavHashLink
                smooth
                to="#projects"
                className='nav-link'
                onClick={() => updateExpanded(false)}
              >Projects
              </NavHashLink>
            </Nav.Item>

            {/* <Nav.Item>
              <NavHashLink
                as={Link}
                to="#contact"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />Contact
              </NavHashLink>
            </Nav.Item> */}

            <Nav.Item>
              <a className="nav-link"
                target="_blank"
                href="https://drive.google.com/file/d/159XC9H4EpEmgyDf0J-kS3LrC7Kz-XlYf/view?usp=sharing"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
