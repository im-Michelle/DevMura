import styled from 'styled-components';
import { NewNavBarFeed } from '../../components/Navbar-feed';
import { colors } from '../../ui/colors';
import HeaderProfile from './components/HeaderProfileIMG';
import HeaderProfileInfo from './components/HeaderProfileInfo';
import Languages from './components/Languages';
import SocialNetworks from './components/SocialNetworks';
import FriendOrNotFriend from './components/Friend';

const MainAll = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.new};
  width: 100%;
  padding-top: 10vh;
  min-height: 100vh;
  gap: 3rem;
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0 5px 8px #000000a2;
  padding-bottom: 20px;
  position: relative;
`;

const UserPage = () => {

  return (
    <>
        <NewNavBarFeed/>
        <MainAll> 
          <ProfileContainer>
            <HeaderProfile
              headerImg="https://images.pexels.com/photos/2387819/pexels-photo-2387819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              avatarImg="https://images.pexels.com/photos/10106827/pexels-photo-10106827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <HeaderProfileInfo
              name="Usuario"
              username="Por definir"
              lastName="Pedro paramos"
              role="Don chingon"
              location="US"
              createdAt="1999-10-10T00:00:00.000Z"
              bio="Me gusta el perico y los excesos alv"
            />
            
          </ProfileContainer>
          <FriendOrNotFriend
            friend={true}
            linkToMessage="/message"
          />
            <SocialNetworks
              linkLinkedin="https://www.linkedin.com/"
              linkGithub="https://www.linkedin.com/"
            />
            <Languages
              languages={["Express", "MongoDB", "SQL", "Python", "Java", "C++", "CS", "C++", "Dart", "Flutter", "Go", "Django", "Docker",]}
            />
        </MainAll>
        
    </>
  )
}

export default UserPage;