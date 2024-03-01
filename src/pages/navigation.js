import React from "react";
import styled from "styled-components";
import dogsSketch from "../assets/images/dogs-sketch.png";
import { useStaticQuery, graphql } from "gatsby";

const NavBar = styled.nav`
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 999; /* Ensure the navbar stays above other content */
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
`;

const MenuItem = styled.li`
  margin: 0 10px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333; /* Adjust link color */
  font-size: 20px; /* Adjust font size */
  font-weight: bold;
  /* Add any additional styles for the links */
`;

const MenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FixedNavBar = () => {
  const data = useStaticQuery(graphql`
    query LandingPageQuery {
      allPrismicHomepage {
        nodes {
          data {
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

  const { details_header, site_title } = data.allPrismicHomepage.nodes[0].data;

  return (
    <NavBar>
      <Menu>
        <MenuItems>
          <Logo src={dogsSketch} alt="Logo" />
          <NavLink href="#">{site_title.text}</NavLink>
        </MenuItems>
        <MenuItems>
          <MenuItem>
            <NavLink href="#">{details_header.text}</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink href="#">Schedule</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink href="#">FAQ</NavLink>
          </MenuItem>
        </MenuItems>
      </Menu>
    </NavBar>
  );
};

export default FixedNavBar;
