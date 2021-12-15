import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.li`
  font-style: normal;
  font-weight: 300;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "3.6rem")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "6rem")};
  list-style: none;
  color: ${(props) => (props.color ? props.color : "#fff")};
`;

const CityItem = ({ children, ...props }) => (
  <ContentWrapper {...props}>{children}</ContentWrapper>
);

export default CityItem;
