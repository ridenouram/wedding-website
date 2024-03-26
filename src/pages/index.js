import React from "react";
import styled from "styled-components";
import "../assets/fonts/fonts.css";
import venuePhoto from "../assets/images/camp-clark.jpeg";
import appleTreePhoto from "../assets/images/apple-tree.png";
import FixedNavBar from "./navigation";
import { createGlobalStyle } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import EmailForm from "../components/EmailForm";

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

const SectionTitle = styled.p`
  font-size: 25px;
  color: #333;
  border: 2px solid rgba(85, 85, 91, 0.5);
  border-radius: 8px;
  padding: 5px 10px;
  margin: 0;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  width: 80%;
  text-align: center;
  max-width: 100%;
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

const ParagraphContainer = styled.div`
  background-color: rgba(244, 241, 232, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 100%;
  padding: 10% 0%;
  margin-bottom: 10%;
  ul {
    text-align: center;
    list-style-position: inside;
  }
  h4 {
    text-style: bold;
    margin-top: 60px;
    font-size: 21px;
  }
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
            schedule_body {
              html
            }
            schedule_header {
              text
            }
            basic_info_body {
              html
            }
          }
        }
      }
    }
  `);

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]');
  }

  const {
    details_body,
    details_header,
    site_title,
    basic_info_body,
    schedule_header,
    schedule_body,
  } = data.allPrismicHomepage.nodes[0].data;

  return (
    <>
      <GlobalStyle />
      <LandingPageContainer>
        <FixedNavBar />
        <ScrollContainer id="top">
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
          <ParagraphContainer>
            <Paragraph
              dangerouslySetInnerHTML={{ __html: basic_info_body.html }}
            />
          </ParagraphContainer>
          <ParagraphContainer id="schedule">
            <SectionTitle>{schedule_header.text}</SectionTitle>
            <Paragraph
              dangerouslySetInnerHTML={{ __html: schedule_body.html }}
            />
          </ParagraphContainer>
          <ParagraphContainer id="details">
            <SectionTitle>{details_header.text}</SectionTitle>
            <Paragraph
              dangerouslySetInnerHTML={{ __html: details_body.html }}
            />
          </ParagraphContainer>
          <ParagraphContainer>
            <EmailForm />
          </ParagraphContainer>
        </ScrollContainer>
      </LandingPageContainer>
    </>
  );
};

export default LandingPage;
