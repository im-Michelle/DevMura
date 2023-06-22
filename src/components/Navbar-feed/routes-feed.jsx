import { Link } from "react-router-dom";
import styled from "styled-components";
import { Tooltip } from '@mui/material';


const FeedRoutes = styled.div`
    width: 100%;
    max-width: 87%;
    max-height: 100%;
    height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 1rem;

@media (max-width: 768px) {
    display: none;
    }
`;

const StyledLink = styled(Link)`
height: 5vh;
max-width: 100%;
//width: 1rem;
display: flex;
align-content: center;
align-items: center;
text-decoration: none;
transition: all 0.1s ease-in-out;
filter: invert(1);
:hover {
    transform: scale(1.09);
}
:active {
    transform: scale(0.99);
}

@media (max-width: 500px) {
    display: none;
}
`;

const LinkImg = styled.img`
width: 30px;
height: 30px;
object-fit: cover;
&.profile-photo{
    filter: invert(1);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    object-fit: cover;
}
`;


const FeedRoutesComponent = ({userImg}) => {
    return (
        <>
                    <FeedRoutes>
                        <Tooltip title="home">
                        <StyledLink to="/feed">
                            <LinkImg src="/icons/home-light-blue.svg" alt="Home" />
                        </StyledLink>
                        </Tooltip>
                        <Tooltip title="groups">
                        <StyledLink to="/groups">
                            <LinkImg src="/icons/groups-red.svg" alt="Groups" />
                        </StyledLink>
                        </Tooltip>
                        <Tooltip title="notification">
                            <StyledLink to="/friends">
                                <LinkImg src="/icons/green-bell.svg" alt="Notifications" />
                            </StyledLink>
                        </Tooltip> 
                        <Tooltip title="message">
                            <StyledLink to="/chats">
                                <LinkImg src="/icons/messages.svg" alt="Messages" />
                            </StyledLink>
                        </Tooltip> 

                        <Tooltip title="profile">
                            {<StyledLink to="/profile">
                                <LinkImg src={ userImg ? userImg :  "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" } className='profile-photo' alt="Me" />
                            </StyledLink>}
                        </Tooltip>
                    </FeedRoutes>
        </>
    )
}

export default FeedRoutesComponent;