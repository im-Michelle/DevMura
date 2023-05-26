import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../ui/colors';
import { user } from '../../data/user';

const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
  
`;

const DropdownMenu = styled.div`
  width: 100%;
  max-width: 10%;
  height: 5vh;
  display: flex;
    
  @media (max-width: 768px) {
    max-width: 100%;
    justify-content: center;
  }

  @media (max-width: 500px) {
    max-width: 100%;
  }
`;

const DropdownImgLink = styled(Link)`
    width: 150px;
    height: 70px;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-top: 30px;
    color: ${colors.primaryText};

    @media (max-width: 768px) {
        max-width: 3rem;
        max-height: 3rem;
        width: 50px;
        height: 50px;
        margin-top: 25px;
    }
`;

const MiniMenuContainer = styled.div`
    width: 100%;
    height: 12vh;
    display: flex;
    flex-direction: row;
   
    justify-content: space-around;
`;

const DropdownImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  
    @media (max-width: 768px) {
        max-width: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (min-width: 768px) {
        margin-left: 2.5rem;
        max-width: 50%;
        width: 50%;
        height: 100%;
        object-fit: cover;
    }
`;

const DropFeedRoutes = styled.div`
    display: flex;
    align-items: center;
    
    @media (max-width: 768px) {

        gap: 1rem;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

const StyledLink2 = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-right: 10px;
    color: ${colors.primaryText};
`;

const LinkImg2 = styled.img`
    width: 24px;
    height: 24px;
    object-fit: cover;
`;

const TextImg2 = styled.span`
    margin-top: 4px;
    font-size: .8rem;
`;

const DropdownContent = styled.div`
  width: 200px;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #3232323b;
  backdrop-filter: blur(5px);
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  margin-top: 0.5rem;
  display: ${(props) => (props.open ? 'block' : 'none')};


  @media (max-width: 1470px) {
    background-color: ${colors.new};
  }
  @media (max-width: 768px) {
    background-color: ${colors.new};
    width: 100%;
    max-width: 100%;
    right: auto;
    left: 0;
  }
`;

const DropdownItem = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${colors.primaryText};
  padding: 0.6rem;
  font-size: 16px;
  display: flex;
  justify-content: center;

  &:hover {
    color: ${colors.contrast};
  }

  @media (max-width: 768px) {
    font-size: 17px;
    color: #ffffff;
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
    object-fit: cover;

  }

  .text {
    font-size: 13px;
  }
`;

const Menu = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <>
            <DropdownMenu>
                <DropdownButton onClick={toggleDropdown}>
                    <StyledMenu className="link-menu">
                        <img className="img" src="/icons/menu.png" alt="Menu" />
                    </StyledMenu>
                </DropdownButton>
                <DropdownContent open={dropdownOpen}>
                    <MiniMenuContainer>
                        <DropdownImgLink to="/profile">
                            <DropdownImg src={user.img}  alt="Me" />
                        </DropdownImgLink>
                        <DropFeedRoutes>
                            <StyledLink2 to="/feed">
                                <LinkImg2 src="/icons/home-light-blue.png" alt="Home" />
                                <TextImg2>Home</TextImg2>
                            </StyledLink2>
                            <StyledLink2 to="/groups">
                                <LinkImg2 src="/icons/groups-red.png" alt="Groups" />
                                <TextImg2>Groups</TextImg2>
                            </StyledLink2>
                            <StyledLink2 to="/sign-up">
                                <LinkImg2 src="/icons/green-bell.png" alt="Notifications" />
                                <TextImg2>Notifications</TextImg2>
                            </StyledLink2>
                            <StyledLink2 to="/chats">
                                <LinkImg2 src="/icons/messages.png" alt="Messages" />
                                <TextImg2>Messages</TextImg2>
                            </StyledLink2>
                        </DropFeedRoutes>
                    </MiniMenuContainer>
                    <DropdownItem to="/profile" className="view-profile">View Profile</DropdownItem>
                    <DropdownItem to="/settings">Settings</DropdownItem>
                    <DropdownItem to="/logout">Sign Out</DropdownItem>
                </DropdownContent>
            </DropdownMenu>
        </>
    );
};

export default Menu;