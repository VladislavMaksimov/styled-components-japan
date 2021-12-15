import React from "react";
import styled from "styled-components";

import Description from "../../../../ui-components/Description";

const ContentWrapper = styled.footer`
  display: flex;
  justify-content: end;
  margin-top: 50px;

  @media only screen and (max-width: 1600px) {
    margin-top: 20px;
  }

  @media only screen and (max-width: 1280px) {
    margin-top: 15px;
  }

  @media only screen and (max-width: 768px) {
    position: absolute;
    bottom: 0;
    right: 0;
    margin-top: 0;
  }
`;

const Footer = () => (
  <ContentWrapper>
    <Description>
      Japan is an island country in East Asia. Located in the Pacific Ocean, it
      lies off the eastern coast of the Asian continent and stretches from the
      Sea of Okhotsk in the north to the East China Sea and the Philippine Sea
      in the south.
    </Description>
  </ContentWrapper>
);

export default Footer;
