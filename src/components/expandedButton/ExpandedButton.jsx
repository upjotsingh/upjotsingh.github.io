import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ExpandedButton = ({ onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const moreText = "More";
  const lessText = "Less";
  const handleClick = () => {
    onClick(!isExpanded);
    setIsExpanded(!isExpanded);
  };

  return (
    <Button variant="primary" onClick={handleClick}>
      {isExpanded ? (
        <>
          {lessText} <IoIosArrowUp />
        </>
      ) : (
        <>
          {moreText} <IoIosArrowDown />
        </>
      )}
    </Button>
  );
};

export default ExpandedButton;
