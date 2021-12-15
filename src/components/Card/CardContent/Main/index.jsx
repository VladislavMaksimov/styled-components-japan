import React from "react";
import styled from "styled-components";
import Cities from "./Cities";
import Resources from "./Resources";

const ContentWrapper = styled.main`
  display: flex;
  justify-content: space-between;
`;

const Main = () => (
  <ContentWrapper>
    <Cities />
    <Resources />
  </ContentWrapper>
);

export default Main;
