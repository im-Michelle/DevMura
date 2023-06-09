import styled from 'styled-components';
import { NewNavBarFeed } from '../../components/Navbar-feed';
import { colors } from '../../ui/colors';
import HeaderProfile from './components/HeaderProfileIMG';
import HeaderProfileInfo from './components/HeaderProfileInfo';
import EditIcon from '@mui/icons-material/Edit';
import { Tooltip } from '@mui/material';
import Languages from './components/Languages';
import SocialNetworks from './components/SocialNetworks';

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

const ProfilePage = () => {

  return (
    <>
        <NewNavBarFeed/>
        <MainAll>
          <ProfileContainer>
            <HeaderProfile
              headerImg="https://images.pexels.com/photos/2387819/pexels-photo-2387819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              avatarImg="https://images.pexels.com/photos/10106827/pexels-photo-10106827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Tooltip title="Edit Profile" placement="bottom-end">
              <EditIcon style={{position: 'absolute', top: '10px', right: '10px', cursor: 'pointer'}}/>
            </Tooltip>
            <HeaderProfileInfo
              name="Mari"
              username="mari_korz"
              lastName="Korz"
              role="Frontend Developer"
              location={1}
              createdAt="2021-10-10T00:00:00.000Z"
              bio="I'm a frontend developer with 2 years of experience in the industry. I'm currently working at a startup called DevMura, where I'm in charge of the frontend development of the platform."
            />
          </ProfileContainer>
            <SocialNetworks
              linkLinkedin="https://www.linkedin.com/"
              linkGithub="https://www.linkedin.com/"
            />
            <Languages
            
            />
        </MainAll>
        
    </>
  )
}

export default ProfilePage;