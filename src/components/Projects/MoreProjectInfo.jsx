import React from "react";
import { Col, Row } from "react-bootstrap";
import TooltipComp from "../tooltip/Tooltip";

const MoreProjectInfo = ({ projTechs, projDesc, isExpanded }) => {
  return (
    <div
      className="more-content"
      style={{ height: isExpanded ? "100%" : "0px" }}
    >
      <div className="project-card-tech-container">
        {projTechs.map((tech) => (
          <span key={tech.name} style={{ margin: "2px" }}>
            <TooltipComp title={tech.name}>
              <img src={tech.icon} className="project-card-tech-icon" />
            </TooltipComp>
          </span>
        ))}
      </div>
      <p style={{ textAlign: "justify", fontSize: "13px", margin: "6%" }}>
        {projDesc}
      </p>
    </div>
  );
};

export default MoreProjectInfo;
