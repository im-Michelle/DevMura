import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  height: 8vh;
  background-color: #3232323b;
  backdrop-filter: blur(5px);
  position: fixed;
  z-index: 100;
`;
const NavContainer = styled.div`
  max-width: 1300px;
  width: 95%;
  height: 8vh;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;
const StyledLink = styled(Link)`
  color: white;
  border: 1px solid white;
  border-radius: 8px;
  padding: 4px 12px;
  text-decoration: none;
  &hover {
    color: none;
  }
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
const Logo = styled.picture`
  height: 100px;
  width: 200px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
  }
  ol {
    display: none;
  }
  @media (min-width: 938px) {
    width: 400px;
    ol{
      color: white;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin: 0 10px;
    }
  }
`;
const Input = styled.input`
  display: none;
`;
const Label = styled.label`
  background-image: url("./svg/menu_FILL0_wght400_GRAD0_opsz48.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  filter: invert(1);
  transition: all 0.05s ease-in;
  input[type="checkbox"]:checked ~ & {
    background-image: url("./svg/close_FILL0_wght400_GRAD0_opsz48.svg");
    background-repeat: no-repeat;
    background-size: 100%;
  }
  input[type="checkbox"]:checked ~ & ~ div {
    visibility: visible;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
const Products = styled.div`
  visibility: hidden;
  position: absolute;
  top: 10vh;
  left: 0;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  border-radius: 20px;
  ol {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    
  }
`;
const SyledLink2 = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 10px 0;
  &:hover {
    color: #00aaff;
  }
`;
const SyledLink3 = styled(Link)`
  background-color: #323232;
  width: 50%;
  text-align: center;
  padding: 10px 20px;
  border-radius: 8px;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.5rem;
`;
const StyledLink4 = styled(Link)`
  display: none;
  color: white;
  font-size: 1.5rem;
  border-radius: 8px;
  padding: 4px 12px;
  text-decoration: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const StyledLink5 = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
`;

const NavbarDefault = () => {
  return (
    <Nav>
      <NavContainer>
        <Buttons>
          <StyledLink4 to="/sing-in">Sign in</StyledLink4>
          <StyledLink to="/sign-up">Sign up</StyledLink>
        </Buttons>

        <Logo>
          <img src="./img/icono-logo-blanco.svg" alt="" />
          <ol>
            <StyledLink5>Product</StyledLink5>
            <StyledLink5>Solutions</StyledLink5>
            <StyledLink5>Pricing</StyledLink5>
          </ol>
        </Logo>

        <Input type="checkbox" id="checkbox" />
        <Label htmlFor="checkbox"></Label>

        <Products>
          <ol>
            <SyledLink2>Product</SyledLink2>
            <SyledLink2>Solutions</SyledLink2>
            <SyledLink2>Pricing</SyledLink2>
          </ol>
          <SyledLink3 to="/sign-up">Sign up</SyledLink3>
        </Products>
      </NavContainer>
    </Nav>
  );
};

export default NavbarDefault;
