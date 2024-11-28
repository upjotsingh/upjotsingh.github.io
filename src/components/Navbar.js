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
import { motion } from "framer-motion";
import { type } from "@testing-library/user-event/dist/type";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const variants = {
    navBar: { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.25, duration: 3, type: "spring" } } },
    navItem: { hidden: { opacity: 0 }, show: { opacity: 1, scale: [2, 1] } }
  }

  const MotionNav = motion(Nav)
  const MotionNavItem = motion(Nav.Item)

  function scrollHandler() {
    const navbar = document.getElementById("navbar")
    if (window.scrollY >= 20) {
      // updateNavbar(true);
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky")
      // updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (

    <Navbar
      id="navbar"
      expanded={expand}
      fixed="top"
      expand="md"
      className={"navbar"}
    >

      <Container fluid>
        <HashLink smooth to='#hero' className="d-flex">
          <motion.img
            animate={{ y: [-200, 20, 0] }}
            initial="hidden"
            whileInView={true}
            transition={{ duration: 3, type: 'ease' }}
            src={logo} className="img-fluid logo" alt="brand" />
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

          <MotionNav variants={variants.navBar}
            initial="hidden"
            // animate="show"
            viewport={{ once: true }}
            whileInView="show"
            className="ms-auto" defaultActiveKey="#home">
            <MotionNavItem variants={variants.navBar}>
              <NavHashLink smooth to="#hero" onClick={() => updateExpanded(false)} className='nav-link'>
                Home
              </NavHashLink>
            </MotionNavItem>

            <MotionNavItem variants={variants.navItem}>
              <NavHashLink
                smooth
                to="#about"
                className='nav-link'
                onClick={() => updateExpanded(false)}
              >
                About
              </NavHashLink>
            </MotionNavItem>
            <MotionNavItem variants={variants.navItem}>
              <NavHashLink
                smooth
                to="#skills"
                className='nav-link'
                onClick={() => updateExpanded(false)}
              >
                Skills
              </NavHashLink>
            </MotionNavItem>

            <MotionNavItem variants={variants.navItem}>
              <NavHashLink
                smooth
                to="#work"
                className='nav-link'
                onClick={() => updateExpanded(false)}
              >
                Work
              </NavHashLink>
            </MotionNavItem>
            <MotionNavItem variants={variants.navItem}>
              <NavHashLink
                smooth
                to="#projects"
                className='nav-link'
                onClick={() => updateExpanded(false)}
              >Projects
              </NavHashLink>
            </MotionNavItem>
            {/* <MotionNavItem variants={variants.navItem}>
              <a className="nav-link"
                target="_blank"
                href="https://drive.google.com/file/d/151WNprm1hRYRFbWq-hFRJHRcBX2Z5M0O/view?usp=sharing"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </a>
            </MotionNavItem> */}

            {/* <MotionNavItem>
              <NavHashLink
                as={Link}
                to="#contact"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />Contact
              </NavHashLink>
            </MotionNavItem> */}

          </MotionNav>

        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
}

export default NavBar;
