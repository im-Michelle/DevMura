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
:hover {
    transform: scale(1.1);
    filter: contrast(1.8);
}
:active {
    transform: scale(0.99);
    filter: contrast(1.8);
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
    border-radius: 50%;
    width: 35px;
    height: 35px;
    object-fit: cover;
}
`;

const FeedRoutesComponent = ({userImg}) => {
    return (
        <>
                    <FeedRoutes>
                        <StyledLink to="/feed">
                            <LinkImg src="/icons/home-light-blue.png" alt="Home" />
                        </StyledLink>
                        <StyledLink to="/groups">
                            <LinkImg src="/icons/groups-red.png" alt="Groups" />
                        </StyledLink>
                        <StyledLink to="/friends">
                            <LinkImg src="/icons/green-bell.png" alt="Notifications" />
                        </StyledLink>

                        <Tooltip title="Próximamente" placement="bottom-end">
                            <StyledLink to="/chats">
                                <LinkImg src="/icons/messages.png" alt="Messages" />
                            </StyledLink>
                        </Tooltip> 

                        {<StyledLink to="/profile">
                            <LinkImg src={ userImg ? userImg :  "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" } className='profile-photo' alt="Me" />
                        </StyledLink>}
                    </FeedRoutes>
        </>
    )
}

export default FeedRoutesComponent;