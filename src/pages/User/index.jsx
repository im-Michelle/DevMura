import styled from 'styled-components';
import { NewNavBarFeed } from '../../components/Navbar-feed';
import { colors } from '../../ui/colors';
import HeaderProfile from './components/HeaderProfileIMG';
import HeaderProfileInfo from './components/HeaderProfileInfo';
import Languages from './components/Languages';
import SocialNetworks from './components/SocialNetworks';
import FriendOrNotFriend from './components/Friend';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUserByID } from '../../service/Gets/userService';

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

const profile = JSON.parse(localStorage.getItem('ownProfile'));
const token =  JSON.parse(localStorage.getItem('userDevmura'));

const UserPage = () => {

  const [user, setUser] = useState({});
  useEffect(() => {
    const userPath = window.location.pathname.split("/")[2];
    getUserByID( userPath , token["token"])
      .then((res) => {
        setUser(res)
      })
      .catch((err) => console.log(err));
  }, []);

  

  return (
    <>
        <NewNavBarFeed
          userImg={profile.img}
        />
        <MainAll> 
          <ProfileContainer>
            <HeaderProfile
              headerImg={user.background ? user.background : "https://images.pexels.com/photos/2387819/pexels-photo-2387819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
              avatarImg={user.img ? user.img : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
              vip={user.userRoles ? user.userRoles : ["vip"]}
            />
            <HeaderProfileInfo
              name={user.name ? user.name : "User not found"}
              username={user.username ? user.username : "not found"}
              lastName={user.lastName ? user.lastName : "not found"}
              role={user.role ? user.role : ""}
              location={user.country}
              createdAt={user.createdAt}
              bio={user.bio ? user.bio : "--"}
            />
            
          </ProfileContainer>
          <FriendOrNotFriend
            friend={true}
            linkToMessage="/message"
          />
            <SocialNetworks
              linkLinkedin={`https://www.linkedin.com/${user.linkedin}`}
              linkGithub={`https://www.github.com/${user.github}`}
            />
            <Languages
              languages={user.languageProfiles ? user.languageProfiles : ["Java", "JavaScript"]}
            />
        </MainAll>
        
    </>
  )
}

export default UserPage;