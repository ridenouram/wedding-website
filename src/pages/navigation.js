import React, { useState } from "react";
import styled from "styled-components";
import dogsSketch from "../assets/images/dogs-sketch.png";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

const NavBar = styled.nav`
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 999; /* Ensure the navbar stays above other content */
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 50px; /* Adjust height as needed */
  margin: 0 15px;
`;

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 70px; /* Adjust according to your navbar height */
    left: 0;
    width: 100%;
    max-width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 998;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

const MenuItem = styled.li`
  margin: 0 10px;
`;

const NavLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: #333; /* Adjust link color */
  font-size: 20px; /* Adjust font size */
  font-weight: bold;
  /* Add any additional styles for the links */
`;

const MenuButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
  }
`;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
`;

const FixedNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const { details_header, site_title } = data.allPrismicHomepage.nodes[0].data;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavBar>
      <MenuButton onClick={toggleMenu}>☰</MenuButton>
      <MenuItems>
        <Logo src={dogsSketch} alt="Logo" />
        <NavLink to="/#top">{site_title.text}</NavLink>
      </MenuItems>
      <Menu isOpen={isOpen}>
        <MenuItems>
          <MenuItem>
            <NavLink to="/#schedule">Schedule</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/#details">Details</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/#RSVP">RSVP</NavLink>
          </MenuItem>
        </MenuItems>
      </Menu>
    </NavBar>
  );
};

export default FixedNavBar;
