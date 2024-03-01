import React from "react";
import styled from "styled-components";
import "../assets/fonts/fonts.css";
import Form from "../components/Form";
import dogsSketch from "../assets/images/dogs-sketch.png";
import venuePhoto from "../assets/images/camp-clark.jpeg";
import appleTreePhoto from "../assets/images/apple-tree.png";
import FixedNavBar from "./navigation";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const LandingPageContainer = styled.div`
  font-family: "Garet-Book";
  width: 100%;
  max-width: 100%;
  height: 100vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${venuePhoto});
  background-position: center center;
  overflow: scroll;
`;

const Heading = styled.h1`
  font-size: 36px;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 25px;
  color: #555;
  margin: 0;
`;

const SecondarySubtitle = styled.p`
  font-size: 15px;
  color: #555;
  margin: 0;
  font-style: italic;
`;

const Paragraph = styled.p`
  font-size: 18px;
  width: 60%;
  text-align: center;
`;

const StyledAppleTreePhoto = styled.img`
  width: 100%;
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const FormContainer = styled.div`
  background-color: rgba(244, 241, 232, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const EmptySpace = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: rgba(244, 241, 232, 0.8);
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LandingPage = () => {
  return (
    <>
      <GlobalStyle />
      <LandingPageContainer>
        <FixedNavBar />
        <ScrollContainer>
          <StyledAppleTreePhoto
            src={appleTreePhoto}
            alt="Anna and Sam standing in front of an apple tree"
          />
          <EmptySpace>
            <DetailsBox>
              <Heading>June 28-30, 2024</Heading>
              <Subtitle>Camp Clark</Subtitle>
              <SecondarySubtitle>17500 Cape Lookout Rd</SecondarySubtitle>
              <SecondarySubtitle>Cloverdale, OR 97112</SecondarySubtitle>
            </DetailsBox>
          </EmptySpace>
          <FormContainer>
            <Paragraph>
              {
                "Sam and Anna’s wedding will take place the weekend of June 28th - 30th at Camp Clark on the Oregon Coast. Camp Clark is two hours from Portland, 40 minutes from Pacific City, and a few miles away from the stunning Cape Lookout trail. "
              }
            </Paragraph>
            <Paragraph>
              {
                "We’ll be renting the entire camp, which includes Adirondack cabins, basic facilities, and over two miles of beautiful Oregon beaches. All guests are encouraged to camp with us for the entire weekend- there’s more than enough room for everyone!"
              }
            </Paragraph>
            <Paragraph>
              {
                "For more information about the facilities and what to bring, please read the FAQ below. We have also included lodging advice and recommendations for anyone who prefers to stay off site. "
              }
            </Paragraph>
            {/* <Form /> */}
          </FormContainer>
        </ScrollContainer>
      </LandingPageContainer>
    </>
  );
};

export default LandingPage;
