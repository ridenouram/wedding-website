// src/pages/LandingPage.tsx
import React from "react";
import styled from "styled-components";
import "../assets/fonts/fonts.css";
import Form from "../components/Form";

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f1e8;
  font-family: "Garet-Book";
`;

const Heading = styled.h1`
  font-size: 36px;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #555;
  margin: 0;
`;

const ComingSoonMessage = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #ff6b6b;
  margin-top: 48px;
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Heading>RIDENOUR-FORST</Heading>

      <Subtitle>June 28-30, 2024</Subtitle>
      <Subtitle>Camp Clark, Oregon Coast</Subtitle>

      <ComingSoonMessage>Coming Soon!</ComingSoonMessage>

      <Form />
    </LandingPageContainer>
  );
};

export default LandingPage;
