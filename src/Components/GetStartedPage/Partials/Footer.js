import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const StyledParagraph = styled(Typography)`
  text-align: center;
  margin-bottom: 30px;
  background-color: transparent;
  display: flex;
  width: 100vw;
  justify-content: center;
  color:#545454;
  font-size: 14px;
`;
const FooterWrapper = styled(Box)`
  position: absolute;
  bottom: 0px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <StyledParagraph>Terms of use | Privacy policy</StyledParagraph>
    </FooterWrapper>
  );
};

export default Footer;
