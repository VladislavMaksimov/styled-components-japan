import React from "react";
import styled from "styled-components";

import SiteLogo from "./SiteLogo";
import MapItem from "./MapItem";
import ContactsItem from "./ContactsItem";

const ContentWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Header = () => (
  <ContentWrapper>
    <SiteLogo>Discover Japan</SiteLogo>
    <MapItem />
    <ContactsItem />
  </ContentWrapper>
);

export default Header;
