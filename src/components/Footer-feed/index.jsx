import React from "react";
import styled from "styled-components";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { colors } from "../../ui/colors";

const FeedFooter = styled.div`
  position: sticky;
  z-index: 1;
  top: 10vh;
  width: fit-content;
  height: fit-content;
  bottom: 70vh;
  background-color: none;
  padding: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  li {
    font-size: 1rem;
  }
  @media (max-width: 1254px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: ${colors.primaryText};
  margin-right: 10px;
  text-decoration: none;
  transition: all 0.15s ease-in-out;
  &:hover {
    color: ${colors.secondaryText};
    text-decoration: underline ${colors.contrast} 2px;
  }
`;

const FooterFeed = () => {
  return (
    <FeedFooter>
      <Container component="main">
        <ul>
          <li>
            <StyledLink to="/about-us">About</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact-us">Contact Us</StyledLink>
          </li>
          <li>
            <StyledLink to="/terms-of-service">Terms of Service</StyledLink>
          </li>
          <li>
            <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
          </li>
          <li>
            <StyledLink>DevMura © 2023</StyledLink>
          </li>
        </ul>
      </Container>
    </FeedFooter>
  );
};

export default FooterFeed;
