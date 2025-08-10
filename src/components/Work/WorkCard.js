import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { Col, Container, Row } from "react-bootstrap";
import { FcMultipleDevices, FcSupport } from 'react-icons/fc'
import TooltipComp from "../tooltip/Tooltip";


function WorkCard({ img, companyName, loc, imgH, imgW, desc, title, date, techStack }) {
  return (
    <Container >
      <Row className="work-card-view">
        <Col md={4} className="work-card-left-container"  >
          <div className="work-card-img-container">
            <img src={img} height={imgH} width={imgW} alt={companyName} />
          </div>
          <div>  <a className="work-card-cmp-name">{companyName}</a><br /><p className="work-card-cmp-loc">{loc}</p></div>
          <div className="work-card-tech-text-container">
            <p className="work-card-tech-text">
              <FcMultipleDevices size={24} style={{ marginRight: '4px' }} />Tech & Tools
              <FcSupport size={24} style={{ marginLeft: '4px' }} /></p>
          </div>
          <Row className="work-card-tech-container">
            {techStack.map(tech => (<Col md={2} lg={3} sm={3} xs={3} key={tech.name}>
              <TooltipComp title={tech.name}>
                <img src={tech.icon} className="work-card-tech-icon" />
              </TooltipComp>
            </Col>))}
          </Row>
        </Col>
        <Col md={8} className="work-card-right-container">

          <label className="work-card-cmp-date" >{date}</label>
          <h2 className="work-card-cmp-title" >{title}</h2>
          <p className="work-card-cmp-desc" >{desc}</p>
          {/* <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(0deg, black,#000000c7, transparent)', height: '30%' }}>
            <Button style={{ position: 'absolute', right: 6, bottom: 6 }}>Read More</Button>

          </div> */}
        </Col>
      </Row>
    </Container>
  );
}
export default WorkCard;
