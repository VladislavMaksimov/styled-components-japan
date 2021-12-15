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

  @media only screen and (max-width: 1600px) {
    max-width: calc(1400px * 0.8);
    max-height: calc(800px * 0.8);
    padding: 40px 45px 13px 58px;
  }

  @media only screen and (max-width: 1280px) {
    max-width: calc(1400px * 0.64);
    max-height: calc(800px * 0.64);
    padding: 36px 59px 26px 64px;
  }

  @media only screen and (max-width: 768px) {
    border-radius: 0;
    padding: 20px;
  }
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
