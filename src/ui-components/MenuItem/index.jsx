import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "2.4rem")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "4rem")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "end")};
  position: ${(props) => (props.position ? props.position : "relative")};
  bottom: ${(props) => (props.bottomOffset ? props.bottomOffset : "12px")};
  color: ${(props) => (props.color ? props.color : "#fff")};
`;

const MenuItem = ({ children, ...props }) => (
  <ContentWrapper {...props}>{children}</ContentWrapper>
);

export default MenuItem;
