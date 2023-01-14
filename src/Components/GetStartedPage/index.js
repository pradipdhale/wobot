import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import Logo from ".././../assets/wobot-logo_blue1@2x.png";
import MiddleRectrangle from "./Partials/MiddleRectrangle.js";


const GetStartedPage = () => {
  const PageWrapper = styled(Box)`
    background: #F9F9F9;
    height: 100vh;
    width: 100%;
  `;
  const ImageStyle = styled(Box)`
    position: relative;
    top: 60px;
    left: 60px;
    width: 160px;
    height: 36.02px;
    background-size: cover;
    background-image: url(${Logo});
  `;
  return (
    <PageWrapper>
      <ImageStyle />
      <MiddleRectrangle />
    </PageWrapper>
  );
};

export default GetStartedPage;
