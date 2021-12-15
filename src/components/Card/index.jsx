import React from "react";
import styled from "styled-components";

import CardContent from "./CardContent";
import background from "../../assets/japan.jpg";

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: auto;
  max-height: 800px;

  background: url(${background}) no-repeat center;
  background-size: cover;
  border-radius: 10px;

  @media only screen and (max-width: 1600px) {
    max-width: calc(1400px * 0.8);
    max-height: calc(800px * 0.8);
  }

  @media only screen and (max-width: 1280px) {
    max-width: calc(1400px * 0.64);
    max-height: calc(800px * 0.64);
  }

  @media only screen and (max-width: 768px) {
    border-radius: 0;
  }
`;

const Card = () => (
  <ContentWrapper>
    <CardContent />
  </ContentWrapper>
);

export default Card;
