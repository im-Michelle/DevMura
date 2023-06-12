import React, { useState } from 'react';
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

const profile = JSON.parse(localStorage.getItem('ownProfile'));

const ProfilePage = () => {
  

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  const [name, setName] = useState("Mari");
  const [lastName, setLastName] = useState("Korz");
  const [role, setRole] = useState("Frontend Developer");
  const [bio, setBio] = useState("I'm a frontend developer with 2 years of experience in the industry. I'm currently working at a startup called DevMura, where I'm in charge of the frontend development of the platform.");

  const handleInputNameChange = (event) => {
    setName(event.target.value);
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
              vip={profile.role}
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
              name={name}
              lastName={lastName}
              bio={bio}
              role={role}
              setName={setName}
            >
              <input type ="text" value={name} onChange={handleInputNameChange} />
            </ModalProfile>
            
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
              linkLinkedin={`https://www.linkedin.com/${profile.likedin}`}
              linkGithub={`https://www.linkedin.com/${profile.github}`}
            />
            <Languages
              languages={["HTML", "CSS", "JavaScript", "React", "Angular", "Vue", "Svelte", "Node", "Express", "MongoDB", "SQL", "Python", "Java", "C", "CS", "C++", "Dart", "Flutter", "Go", "Django", "Docker",]}
            />
        </MainAll>
        
    </>
  )
}

export default ProfilePage;