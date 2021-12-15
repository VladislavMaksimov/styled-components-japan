import React from "react";

const Icon = ({ children, width = 20, height = 20, fill = "none" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

export default Icon;
