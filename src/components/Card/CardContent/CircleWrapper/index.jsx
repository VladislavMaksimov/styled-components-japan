import React from "react";
import styled from "styled-components";
import Circle from "./Circle";

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: -1;
`;

const CircleWrapper = () => (
  <ContentWrapper>
    <Circle />
  </ContentWrapper>
);

export default CircleWrapper;
