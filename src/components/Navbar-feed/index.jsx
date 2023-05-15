import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from "../../ui/colors";


const Nav = styled.nav`
  position: fixed;
  z-index: 100;
  width: 100%;
`;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: #171a22d5;
  backdrop-filter: blur(5px);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20rem;
  @media (max-width: 940px) {
    margin-right: auto;
  }
`;

const LogoImage = styled(Link)`
  width: 100%;
  height: 40px;
  margin-right: 10px;
  background-image: url("/img/icono-dm-blanco.svg");
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 449px) {
    margin-right: 20px;
  }

  @media (max-width: 390px) {
    margin-left: 5rem;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 300px;
  background-color: ${colors.primaryText};

  @media (max-width: 600px) {
    width: 200px;
  }

  @media (max-width: 449px) {
    width: 150px;
  }

  @media (max-width: 390px) {
    width: 180px;
  }
`;

const CenterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 4.5rem;

  @media (max-width: 940px) {
    justify-content: center;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    margin-left: 4rem;
  }
  @media (max-width: 939px) {
    margin-left: 4rem;
  }
`;

const StyledMenu = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${colors.primaryText};

  .img {
    width: 30px;
    height: 30px;
  }

  .text {
    font-size: 13px;
  }

  @media (max-width: 449px) {
    &.link-menu {
      margin-top: 7px;
      margin-left: 6px;
    }
  }

  @media (max-width: 390px) {
    margin-right: 4rem;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${colors.primaryText};

  .img {
    width: 30px;
    height: 30px;
  }

  .text {
    font-size: 13px;
  }

  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.primaryText};
    border-bottom: 2px solid ${colors.contrast};
    left: 5px;
  }

  &:hover::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${colors.primaryText};
    bottom: -2px;
    left: -100%;
    transition: all 0.3s ease;
  }

  &:hover::before {
    left: 0;
  }

  @media (max-width: 1330px) {
    &.link-responsive {
      display: none;
    }
  }

  @media (max-width: 540px) {
    &.link-messages {
      display: none;
    }
  }
  
`;

const ProfilePhoto = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 100%;

  @media (max-width: 449px) {
    margin-left: 30px;
  }

  @media (max-width: 390px) {
    display: none;
  }
`;

const DropdownMenu = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${colors.primaryText};
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 40px;
  margin-top: 1.5rem;
  display: ${(props) => (props.open ? 'block' : 'none')};

  @media (max-width: 390px) {
    margin-right:4.2rem;
    padding: 80px;
  }
`;

const DropdownItem = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${colors.background};
  padding: 10px;
  font-size: 16px;
  white-space: nowrap;

  &:hover {
    color: ${colors.contrast};
  }

  @media (max-width: 390px) {
    font-size: 30px;
    padding: 15px;
    border-bottom: 1px solid #ccc;

    &:hover {
      color: ${colors.contrast};
    }
  }
`;



export const NavBarFeed = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <Nav>
      <NavBarContainer>

        <div>
          <LogoContainer>
            <LogoImage to="home" src="" alt="Logo" />
            <SearchInput type="text" placeholder="Search" />
          </LogoContainer>
        </div>

        <div>
          <CenterLinks>
            <StyledLink to="/home" className="link-style link-responsive">
              <img className="img" src="/icons/home-light-blue.png" alt="Home" />
              <span className="text">Home</span>
            </StyledLink>
            <StyledLink to="/groups" className="link-style link-responsive">
              <img className="img" src="/icons/groups-red.png" alt="Groups" />
              <span className="text">Groups</span>
            </StyledLink>
            <StyledLink to="/notifications" className="link-style link-responsive">
              <img className="img" src="/icons/green-bell.png" alt="Notifications" />
              <span className="text">Notifications</span>
            </StyledLink>
            <StyledLink to="/messages" className="link-style link-messages">
              <img className="img" src="/icons/messages.png" alt="Messages" />
              <span className="text">Messages</span>
            </StyledLink>
            <ProfilePhoto src="https://images.pexels.com/photos/7841717/pexels-photo-7841717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile-photo" />
            <DropdownMenu>
              <DropdownButton onClick={toggleDropdown}>
                <StyledMenu className="link-menu">
                  <img className="img" src="/icons/menu.png" alt="Menu" />
                </StyledMenu>
              </DropdownButton>
              <DropdownContent open={dropdownOpen}>
                <DropdownItem to="/profile">View Profile</DropdownItem>
                <DropdownItem to="/settings">Settings</DropdownItem>
                <DropdownItem to="/logout">Sign Out</DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </CenterLinks>
        </div>

      </NavBarContainer>
    </Nav>
  );
};