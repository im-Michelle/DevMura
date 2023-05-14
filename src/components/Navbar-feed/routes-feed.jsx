import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../ui/colors";

const FeedRoutes = styled.ol`
width: 100%;
max-width: 87%;
height: 5vh;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
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
display-content: center;
align-content: center;
flex-direction: column;
align-items: center;
text-decoration: none;
color: ${colors.primaryText};

@media (max-width: 500px) {
    display: none;
}
`;

const LinkImg = styled.img`
width: 30px;
height: 30px;

&.profile-photo{
    border-radius: 50%;
    height: 30px;
    object-fit: cover;
}
`;

const TextImg = styled.span`
font-size: .5rem;
`;

const FeedRoutesComponent = () => {
    return (
        <>

<FeedRoutes>
                        <StyledLink to="/feed">
                            <LinkImg src="/icons/home-light-blue.png" alt="Home" />
                            <TextImg>Home</TextImg>
                        </StyledLink>
                        <StyledLink to="/sign-up">
                            <LinkImg src="/icons/groups-red.png" alt="Groups" />
                            <TextImg>Groups</TextImg>
                        </StyledLink>
                        <StyledLink to="/sign-up">
                            <LinkImg src="/icons/green-bell.png" alt="Notifications" />
                            <TextImg>Notifications</TextImg>
                        </StyledLink>
                        <StyledLink to="/sign-up">
                            <LinkImg src="/icons/messages.png" alt="Messages" />
                            <TextImg>Messages</TextImg>
                        </StyledLink>
                        <StyledLink to="/profile">
                            <LinkImg src="https://images.pexels.com/photos/7841717/pexels-photo-7841717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='profile-photo' alt="Me" />
                            <TextImg>Me</TextImg>
                        </StyledLink>
                    </FeedRoutes>
        </>
    )
}

export default FeedRoutesComponent;