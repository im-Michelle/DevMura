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
const userDevMura = JSON.parse(localStorage.getItem('userDevmura'));
//console.log("profile: ", profile);
//console.log("TOKEN: ", userDevMura);

const ProfilePage = () => {
  // Info user/profile
  const [id, setId] = useState(profile.id); 
  const [birthday, setBirthday] = useState(profile.birthday);
  const [age, setAge] = useState(profile.age);
  const [bio, setBio] = useState(profile.bio);
  const [img, setImg] = useState(profile.img);
  const [github, setGitHub] = useState(profile.github);
  const [likedin, setLikedin] = useState(profile.likedin);
  const [createdAt, setCreatedAt] = useState(profile.createdAt);
  const [background, setBackground] = useState(profile.background);
  const [role, setRole] = useState(profile.role);
  const [name, setName] = useState(profile.name); 
  const [lastName, setLastName] = useState(profile.lastName); 
  const [userName, setUserName] = useState(profile.username);
  const [country, setCountry] = useState(profile.country);
  const [countryName, setCountryName] = useState(profile.countryName);
  const [token, setToken] = useState(userDevMura.token);

  //const [countryName, setCountryName] = useState(profile.countryName); 

  // Modal edit
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


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
              id={id}
              birthday={birthday}
              age={age}
              bio={bio}
              img={img}
              github={github}
              likedin={likedin}
              createdAt={createdAt}
              background={background}
              role={role}
              name={name}
              lastName={lastName}
              country={country}
              countryName={countryName}
              userName={userName}
              token={token}
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