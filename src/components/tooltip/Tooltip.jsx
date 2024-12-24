import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const TooltipComp = ({ title, children }) => {
  const tooltip = () => (
    <Tooltip id="tooltip">
      <strong>{title}</strong>
    </Tooltip>
  );

  return (
    <OverlayTrigger placement="top" overlay={tooltip()}>
      {children}
    </OverlayTrigger>
  );
};

export default TooltipComp;
