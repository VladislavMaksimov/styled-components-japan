import React from "react";
import styled from "styled-components";
import ResourcesList from "./ResourcesList";

const ContentWrapper = styled.aside`
  display: flex;
  align-items: center;
`;

const Resources = () => (
  <ContentWrapper>
    <ResourcesList />
  </ContentWrapper>
);

export default Resources;
