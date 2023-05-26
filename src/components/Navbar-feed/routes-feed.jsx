import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../ui/colors";
import { user } from '../../data/user';



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
width: 1rem;
display: flex;
align-content: center;
align-items: center;
text-decoration: none;
color: ${colors.primaryText};

animation: all 0.8s ease-in;
:hover {
    transform: scale(1.2);
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
    height: 30px;
    object-fit: cover;
}
`;


const FeedRoutesComponent = () => {
    return (
        <>

                    <FeedRoutes>
                        <StyledLink to="/feed">
                            <LinkImg src="/icons/home-light-blue.png" alt="Home" />
                        </StyledLink>
                        <StyledLink to="/groups">
                            <LinkImg src="/icons/groups-red.png" alt="Groups" />
                        </StyledLink>
                        <StyledLink to="/sign-up">
                            <LinkImg src="/icons/green-bell.png" alt="Notifications" />
                        </StyledLink>
                        <StyledLink to="/chats">
                            <LinkImg src="/icons/messages.png" alt="Messages" />
                        </StyledLink>
                        <StyledLink to="/profile">
                            <LinkImg src={user.img} className='profile-photo' alt="Me" />
                        </StyledLink>
                    </FeedRoutes>
        </>
    )
}

export default FeedRoutesComponent;