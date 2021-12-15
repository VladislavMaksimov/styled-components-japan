import React from "react";
import styled from "styled-components";
import CircleWrapper from "./CircleWrapper";
import Footer from "./Footer";

import Header from "./Header";
import Main from "./Main";

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: auto;
  max-height: 800px;

  position: relative;
  padding: 56px 92px 72px 100px;

  border-radius: 10px;
  background: #212121;
  opacity: 0.75;
  filter: drop-shadow(0px 24px 48px rgba(0, 0, 0, 0.1));
`;

const CardContent = () => (
  <ContentWrapper>
    <Header />
    <Main />
    <Footer />
    <CircleWrapper />
  </ContentWrapper>
);

export default CardContent;
