import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NewNavBarFeed } from '../../components/Navbar-feed';
import { colors } from '../../ui/colors';
import HeaderProfile from './components/HeaderProfileIMG';
import HeaderProfileInfo from './components/HeaderProfileInfo';
import EditIcon from '@mui/icons-material/Edit';
import { Tooltip } from '@mui/material';
import Languages from './components/Languages';
import SocialNetworks from './components/SocialNetworks';
import ModalProfile from '../../components/Modal/ModalProfile/Modal';

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

const userDevMura = JSON.parse(localStorage.getItem('userDevmura'));

const ProfilePage = () => {
  // Info user/profile
  // Info user/profile
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('ownProfile')));
  
  const [ownPosts, setOwnPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <NewNavBarFeed
          userImg={profile.img}
        />
        <MainAll>
          <ProfileContainer>
            <HeaderProfile
              headerImg={profile.background ? profile.background : "https://images.pexels.com/photos/2387819/pexels-photo-2387819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
              avatarImg={profile.img ? profile.img : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
              vip={profile.userRoles}
            />
            <Tooltip title="Edit Profile" placement="bottom-end">
              <EditIcon
                style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }}
                onClick={handleOpenModal}
              />
            </Tooltip>

            <ModalProfile
              open={openModal}
              onClose={handleCloseModal}
              id={profile.id}
              birthday={profile.birthday}
              age={profile.age}
              bio={profile.bio}
              img={profile.img}
              github={profile.github}
              likedin={profile.likedin}
              createdAt={profile.createdAt}
              background={profile.background}
              role={profile.role}
              name={profile.name}
              lastName={profile.lastName}
              countryName={profile.countryName}
              countryCode={profile.country}
              userName={profile.username}
              languageProfiles={profile.languageProfiles}
              token={userDevMura.token}
              profile={profile}
              setProfile={setProfile}
            />       
            <HeaderProfileInfo
              name={profile.name}
              username={profile.username}
              lastName={profile.lastName}
              role={profile.role}
              location={profile.country}
              createdAt={profile.createdAt}
              bio={profile.bio}
            />
          </ProfileContainer>
            <SocialNetworks
              linkLinkedin={`${profile.likedin}`}
              linkGithub={`${profile.github}`}
            />
            <Languages
              languages={profile.languageProfiles}
            />

          <PostContainer>
           {
            ownPosts.map((post) =>(
              <Post
                key={post.id}
                id={post.id} 
                firstName={post.name}
                lastName={post.lastName}
                role={post.role}
                userName={post.username}
                time={post.createdAt}
                img={post.img}
                bodyText={post.postBody}               
                userRole={post.userRole}
                userId={post.userId}
                postImg={post.imgSource}
                likes={post.counter}
                hearts={post.hearts}
                ownId={userDevMura.id}
                aut={userDevMura.token}
                ownPhoto={ownUser.img}
                ownName={ownUser.name}
                ownLastName={ownUser.lastName}
              />
            ))
           }
          </PostContainer> 
        </MainAll>
    </>
  )
}

export default ProfilePage;