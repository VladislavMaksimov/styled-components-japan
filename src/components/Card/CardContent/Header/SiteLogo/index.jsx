import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  color: #fff;
  font-size: 3.7rem;
  line-height: 6rem;
  font-style: normal;
  font-weight: 800;
`;

const SiteLogo = ({ children }) => <ContentWrapper>{children}</ContentWrapper>;

export default SiteLogo;
