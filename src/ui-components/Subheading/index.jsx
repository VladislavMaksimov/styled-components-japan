import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.8rem")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "3rem")};
  color: ${(props) => (props.color ? props.color : "#fff")};
`;

const Subheading = ({ children, ...props }) => (
  <ContentWrapper {...props}>{children}</ContentWrapper>
);

export default Subheading;
