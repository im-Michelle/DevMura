import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../ui/colors";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const HomeFooter = styled.footer`
  width: 100%;
  height: fit-content;
  background-color: ${colors.new};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 60px 0;
  @media (min-width: 958px){
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    gap: 6rem;
  }
  h2{
    color: ${colors.primaryText};
    width: 90%;
    text-align: center;
    font-size: 2rem;
    margin: auto;
    padding-bottom: 1rem;
    @media (min-width: 768px){
      width: 50%;
      text-align: left;
      font-size: 2rem;
    }
  }
  p{
    color: ${colors.secondaryText};
    width: 100%;
    text-align: center;
    font-size: 1.0rem;
    margin: auto;
  }
  ul{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`
const CustomBox = styled(Box)`
  background-color: ${colors.new};
  display: flex;
  align-items: center;
  justify-content: center;
`
const InputMui = styled(TextField)`
  max-width: 800px;
  color: ${colors.primaryText};
  border-radius: 10px;
  height: 60px;
  input{
    color: ${colors.primaryText};
  }
  label{
    color: ${colors.primaryText};
  }
`
const ButtonMui = styled(Button)`
  color: ${colors.primaryText};
  border-radius: 0 10px 10px 0;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.primaryText};
  &:hover{
    background-color: ${colors.contrast};
    color: ${colors.primaryText};
  }
`
const SVGsocial = styled.img`
  width: 40px;
  height: 40px;
  aspect-ratio: 1/1;
  object-fit: cover;
  filter: invert(1);
  transition: all 0.5s ease-in-out;
  &:hover{
    transform: scale(1.2);
  }
  @media (min-width: 768px){
    width: 60px;
    height: 60px;
  }
`
const CustomUl = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
`

const Footer = () => {
    return (
        <HomeFooter>
          <div>
            <h2>DevMura</h2>
            <ul>
              <li>
                <StyledLink to="/feed">Home</StyledLink>
              </li>
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
            </ul>
          </div>
          <div>
            <h2>Connect</h2>
            <CustomUl>
              <li>
                <Link to="/"><SVGsocial src="https://www.svgrepo.com/show/509967/github.svg" alt="" /></Link>
              </li>
              <li>
                <Link to="/"><SVGsocial src="https://www.svgrepo.com/show/509968/gitlab.svg" alt="" /></Link>
              </li>
              <li>
                <Link to="/"><SVGsocial src="https://www.svgrepo.com/show/510026/instagram.svg" alt="" /></Link>
              </li>
              <li>
                <Link to="/"><SVGsocial src="https://www.svgrepo.com/show/510045/linkedin.svg" alt="" /></Link>
              </li>
            </CustomUl>
          </div>
          <div>
            <h2>Subscribe</h2>
            <p>Sign up with your email address to receive news and updates.</p>
            <form action="">
              <CustomBox sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <InputMui id="standard-basic" label="email" variant="standard"  required/>
              <ButtonMui variant="contained" type="submit"  endIcon={<SendIcon />}>Send</ButtonMui>
              </CustomBox>
            </form>
          </div>
        </HomeFooter>
    );
};

export default Footer;