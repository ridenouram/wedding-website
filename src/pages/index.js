import React from "react";
import styled from "styled-components";
import "../assets/fonts/fonts.css";
import venuePhoto from "../assets/images/camp-clark.jpeg";
import appleTreePhoto from "../assets/images/apple-tree.png";
import FixedNavBar from "./navigation";
import { createGlobalStyle } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

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
  const data = useStaticQuery(graphql`
    query LandingPageQuery {
      allPrismicHomepage {
        nodes {
          data {
            details_body {
              html
            }
            details_header {
              text
            }
            site_title {
              text
            }
          }
        }
      }
    }
  `);

  const { details_body, details_header, site_title } =
    data.allPrismicHomepage.nodes[0].data;

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
            <Paragraph
              dangerouslySetInnerHTML={{ __html: details_body.html }}
            />
          </FormContainer>
        </ScrollContainer>
      </LandingPageContainer>
    </>
  );
};

export default LandingPage;
