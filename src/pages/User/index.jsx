import Header from '../Social-feed/components/Header';
import styled from 'styled-components';
import { NewNavBarFeed } from '../../components/Navbar-feed';
import { colors } from '../../ui/colors';
import { MainFeed } from '../Social-feed';
import { ProgramingLeng } from './components/ProgramingLeng';
import { PersonalDescription } from './components/PersonalDescription';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MailIcon from '@mui/icons-material/Mail';
import { getUserByID } from '../../service/Gets/userService';
import { useEffect, useState } from 'react';


const MainAll = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.new};
  width: 100%;
  padding-top: 10vh;
  min-height: 100vh;
`;

const GroupIcon = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 5rem;
`;
const EachIcon = styled.div`
  display: flex;
  justify-content: center;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background-color: #A8DADC;
  align-items: center;
  transition: all 0.3s ease-out;
  &:hover{
    transform: scale(1.1);
    background-color: ${colors.contrast};
    box-shadow: 0 0 15px ${colors.contrast};
    color: ${colors.primaryText};
    cursor: pointer;
  };
`;

const ExtraInfo = styled.div`
  display: flex;
  justify-content: center;

  position: relative;

`;

const ProfilePage = () => {

  const userPath = window.location.pathname.split("/")[2];

  const [user, setUser] = useState({})


  return (
    <>
        <NewNavBarFeed/>
        <MainAll>
          <MainFeed>
              <Header 
                  name= {user.name}
                  lastName={user.lastName}
                  userName={user.username}
                  img={user.profile && user.profile.img}
                  backGroundIMG={user.profile && user.profile.background}
                  />
              <PersonalDescription
                  description={user.profile && user.profile.bio}
              />

              <ExtraInfo>
                <ProgramingLeng/>
          
              </ExtraInfo>

              <GroupIcon>
                <EachIcon>
                  <PersonAddIcon fontSize='large'/>
                </EachIcon>
                <EachIcon>
                  <MailIcon fontSize='large' />
                </EachIcon>
              </GroupIcon>


           
          </MainFeed>
        </MainAll>
    </>
  )
}

export default ProfilePage;