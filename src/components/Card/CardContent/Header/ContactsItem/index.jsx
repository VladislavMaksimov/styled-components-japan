import React from "react";
import styled from "styled-components";

import MenuItem from "../../../../../ui-components/MenuItem";

const ContentWrapper = styled(MenuItem)`
  margin-right: 1rem;
`;

const ContactsItem = () => <ContentWrapper>contacts</ContentWrapper>;

export default ContactsItem;
