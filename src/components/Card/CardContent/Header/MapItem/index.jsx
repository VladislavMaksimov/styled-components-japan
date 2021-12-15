import React from "react";
import styled from "styled-components";

import MenuItem from "../../../../../ui-components/MenuItem";

const ContentWrapper = styled(MenuItem)`
  flex-grow: 1;
  margin-right: 5rem;
`;

const MapItem = () => <ContentWrapper>map</ContentWrapper>;

export default MapItem;
