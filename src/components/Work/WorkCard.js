import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function WorkCard({ img, companyName, imgH, imgW, desc, title, date }) {
  return (
    <div className="work-card-view">
      <div className="work-card-title-container">
        <div className="work-card-img-container">
          <img src={img} height={imgH} width={imgW} alt={companyName} /></div>
        <div>
          <div className="work-card-title"><label>{title}</label></div>
          <div className="work-card-subtitle"><label>{companyName}</label></div>
          <div className="work-card-date"><label>{date}</label></div>

        </div>
      </div>
      <div className="work-card-underlne-container">
        <div className="work-card-underlne"></div>
      </div>
      <div className="work-card-desc">
        <label >{desc}</label>
      </div>

    </div>
    // <Card className="work-card-view">
    //   <Card.Img variant="top" src={props.imgPath} alt="card-img" />
    //   <Card.Body>
    //     <Card.Title>{props.title}</Card.Title>
    //     <Card.Text style={{ textAlign: "justify" }}>
    //       {props.description}
    //     </Card.Text>
    //     <Button variant="primary" href={props.ghLink} target="_blank">
    //       <BsGithub /> &nbsp;
    //       {props.isBlog ? "Blog" : "GitHub"}
    //     </Button>
    //   </Card.Body>
    // </Card>
  );
}
export default WorkCard;
