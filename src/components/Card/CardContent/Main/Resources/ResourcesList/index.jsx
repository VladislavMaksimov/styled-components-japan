import React from "react";
import styled from "styled-components";
import FacebookIcon from "./FacebookIcon";
import PinterestIcon from "./PinterestIcon";
import TwitterIcon from "./TwitterIcon";

const ContentWrapper = styled.ul`
  list-style-type: none;

  > *:not(:nth-last-child(1)) {
    margin-bottom: 44px;
  }
`;

const ResourcesList = () => (
  <ContentWrapper>
    <li>
      <FacebookIcon />
    </li>
    <li>
      <TwitterIcon />
    </li>
    <li>
      <PinterestIcon />
    </li>
  </ContentWrapper>
);

export default ResourcesList;
