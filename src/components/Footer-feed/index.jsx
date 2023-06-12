import React from "react";
import styled from "styled-components"; // Importa styled-components para usar StyledLink
import Container from "@mui/material/Container";


const FeedFooter = styled.div`
  position: sticky;
  top: 75px;
  width: fit-content;
  height: fit-content;
  bottom: 70vh;
  background-color: none;
  padding: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  li {
    font-size: 15px;
  }
  @media (max-width: 1100px) {
    display: block;
    margin: auto;
    position: relative;
    top: unset;
    bottom: unset;
  }
`;

const StyledLink = styled.a`
  color: #bbbbbb;
  margin-right: 10px;
  text-decoration: none;
`;

const FooterFeed = () => {
  return (
    <FeedFooter>
      <Container component="main">
        <ul>
          <li>
            <StyledLink href="/feed">Home</StyledLink>
          </li>
          <li>
            <StyledLink href="/about-us">About</StyledLink>
          </li>
          <li>
            <StyledLink href="/contact-us">Contact Us</StyledLink>
          </li>
          <li>
            <StyledLink href="/terms-of-service">Terms of Service</StyledLink>
          </li>
          <li>
            <StyledLink href="/privacy-policy">Privacy Policy</StyledLink>
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
