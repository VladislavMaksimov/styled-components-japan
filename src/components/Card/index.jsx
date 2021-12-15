import React from "react";
import styled from "styled-components";

import CardContent from "./CardContent";

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: auto;
  max-height: 800px;

  background: url(../../assets/japan.jpg) no-repeat center;
  background-size: cover;
  border-radius: 10px;
`;

const Card = () => (
  <ContentWrapper>
    <CardContent/>
  </ContentWrapper>
);

export default Card;
