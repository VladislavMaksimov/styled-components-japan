import React from "react";
import styled from "styled-components";

import Description from "../../../../ui-components/Description";

const ContentWrapper = styled.footer`
  display: flex;
  justify-content: end;
  margin-top: 50px;
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
