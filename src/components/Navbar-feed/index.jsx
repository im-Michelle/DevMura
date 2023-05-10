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
  background-color: ${colors.new};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20rem;

  @media (max-width: 940px) {
    margin-right: auto;
  }
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;

  /*
  @media (max-width: 948px) {
    display: none;
  }
  */

  @media (max-width: 449px) {
    margin-right: 20px;
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
`;

const CenterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 4.5rem;

  @media (max-width: 940px) {
    justify-content: center;
    gap: 2rem;
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

  @media (max-width: 1330px) {
    &.link-responsive {
      display: none;
    }
  }

  @media (max-width: 449px) {
    &.link-messages {
      
    }
  }
  
`;

const ProfilePhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;

  @media (max-width: 449px) {
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
`;

const DropdownItem = styled(Link)`
  display: block;
  text-decoration: none;
  color: #444;
  padding: 10px;
  font-size: 16px;
  white-space: nowrap;
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
            <LogoImage src="../public/img/icono-dm-blanco.svg" alt="Logo" />
            <SearchInput type="text" placeholder="Search" />
          </LogoContainer>
        </div>

        <div>
          <CenterLinks>
            <StyledLink to="/home" className="link-style link-responsive">
              <img className="img" src="../public/icons/home-light-blue.png" alt="Home" />
              <span className="text">Home</span>
            </StyledLink>
            <StyledLink to="/groups" className="link-style link-responsive">
              <img className="img" src="../public/icons/groups-red.png" alt="Groups" />
              <span className="text">Groups</span>
            </StyledLink>
            <StyledLink to="/notifications" className="link-style link-responsive">
              <img className="img" src="../public/icons/green-bell.png" alt="Notifications" />
              <span className="text">Notifications</span>
            </StyledLink>
            <StyledLink to="/messages" className="link-style link-messages">
              <img className="img" src="../public/icons/messages.png" alt="Messages" />
              <span className="text">Messages</span>
            </StyledLink>
            <ProfilePhoto src="img-profile.png" alt="profile-photo" />
            <DropdownMenu>
              <DropdownButton onClick={toggleDropdown}>
                <StyledLink to="/messages" className="link-style link-messages">
                  <img className="img" src="../public/icons/menu.png" alt="Menu" />
                </StyledLink>
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