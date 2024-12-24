import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap";
import './project.css'
import tempImage from '../../assets/home-main.svg'
import LINK_ICON from '../../assets/projects/link.svg'
import GITHUB_ICON from '../../assets/projects/github.svg'
import ExpandedButton from "../expandedButton/ExpandedButton";
import MoreProjectInfo from "./MoreProjectInfo";

function ProjectCards(props) {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <Container>
      <div className="project-card-view">
        <div className="project-card-top-title-container">

          <img src={props.projIcon} className="project-card-title-img" width={'32px'} height={'32px'} />
          <p className="project-card-top-title">{props.title} </p>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', height: '100%', width: '100%' }}>
            <MoreProjectInfo projTechs={props.projTech} projDesc={props.description} isExpanded={isExpanded} />
          </div>

          <img src={props.img} className="project-card-img" style={{ width: isExpanded ? '0%' : '100%', opacity: isExpanded ? 0 : 1 }} />
          <p className="project-card-overlay-container project-card-desc" style={{ opacity: isExpanded ? 0 : 1 }} >{props.shortDesc}</p>
        </div>
        <Container className="project-card-overlay-container">
          <Row >
            {props.demoLink && (
              <Col md={2} sm={2} xs={2}>
                <a href={props.demoLink} target="_blank">

                  <img className="project-card-link-img" alt="Github Icon" src={LINK_ICON} />
                </a>
              </Col>)}
            <Col md={2} sm={2} xs={2}>
              {props.gitLink && (
                <a href={props.gitLink} target="_blank">
                  <img className="project-card-link-img-github" alt="Link Icon" src={GITHUB_ICON} />
                </a>

              )}
            </Col>



            <Col md={8} sm={8} xs={8} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <ExpandedButton onClick={(isExp) => { setIsExpanded(isExp) }} />
            </Col>
          </Row>
        </Container>
      </div>
    </Container >



    // <Card className="project-card-view">
    //   {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
    //   <Card.Body>
    //     <Card.Title className="project-card-title">{props.title}</Card.Title>
    //     <Card.Text style={{ textAlign: "justify" }}>
    //       {props.description}
    //     </Card.Text>
    //     {props.gitLink && (<Button variant="primary" href={props.ghLink} target="_blank">
    //       <BsGithub /> &nbsp;Github
    //     </Button>)}


    //     {props.demoLink && (
    //       <Button
    //         variant="primary"
    //         href={props.demoLink}
    //         target="_blank"
    //         style={{ marginLeft: "10px" }}
    //       >
    //         <FaExternalLinkAlt /> &nbsp; Preview
    //       </Button>
    //     )}
    //   </Card.Body>
    // </Card>
  );
}
export default ProjectCards;
