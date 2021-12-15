import React from "react";
import styled from "styled-components";

import Subheading from "../../../../../ui-components/Subheading";
import CitiesList from "./CitiesList";

const ContentWrapper = styled.aside`
  margin-top: 2.5rem;
`;

const Cities = () => (
  <ContentWrapper>
    <Subheading>Cities</Subheading>
    <CitiesList/>
  </ContentWrapper>
);

export default Cities;
