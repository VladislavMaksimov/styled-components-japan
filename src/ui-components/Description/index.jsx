import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.p`
  width: 38.8rem;
  font-style: normal;
  font-weight: 300;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.4rem")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "2.3rem")};
  color: ${(props) => (props.color ? props.color : "#fff")};
`;

const Description = ({ children, ...props }) => (
  <ContentWrapper {...props}>{children}</ContentWrapper>
);

export default Description;
