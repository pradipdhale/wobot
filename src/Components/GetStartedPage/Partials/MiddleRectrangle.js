import { Box, styled } from "@mui/material";
import React from "react";

const MiddleRectrangle = () => {
  const StripBox = styled(Box)`
    position: fixed;
    width: 200vw;
    height: 392.25px;
    left: -13vw;
    bottom: 70vh;
    background: #f0f0f0;
    opacity: 0.45;
    transform: rotate(-30deg);
  `;
  const LeftStripBox = styled(Box)`
    background: #3766e8;
    opacity: 0.45;
    width: 60vw;
    height: 13.44px;
    position: relative;
    top: -13.44px;
  `;
  const RightStripBox = styled(Box)`
    background: #3766e8;
    opacity: 0.45;
    width: 60vw;
    height: 13.44px;
    position: relative;
    top: 377.25px;
    right: -50vw;
  `;

  return (
    <StripBox>
      <LeftStripBox />
      <RightStripBox />
    </StripBox>
  );
};

export default MiddleRectrangle;
