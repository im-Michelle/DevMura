import Header from '../Social-feed/components/Header';
import styled from 'styled-components';
import { NewNavBarFeed } from '../../components/Navbar-feed';
import { colors } from '../../ui/colors';
import { MainFeed } from '../Social-feed';

import { user } from '../../data/user';

import { LearningInterests } from './components/LearningInterests';
import { ProgramingLeng } from './components/ProgramingLeng';
import { PersonalDescription } from './components/PersonalDescription';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MailIcon from '@mui/icons-material/Mail';

import Post from '../../components/Post';
import { posts } from "../../data/posts";
import { Label } from '@mui/icons-material';

let publicaciones = posts;

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

const ProfilePageEdit = () => {
  return (
    <>
        <NewNavBarFeed/>
        <MainAll>
          <MainFeed>
              <Header
                  name= {user.name}
                  lastName={user.lastName}
                  userName={user.userName}
                  img={user.img}
                  backGroundIMG={user.backGroundIMG}
                  />
              <PersonalDescription/>
              <ExtraInfo>         
                <ProgramingLeng/>
                <LearningInterests/>
              </ExtraInfo>

              {publicaciones.map((post)=>{
                return(
                    <Post
                        key={post.key}
                        id={post.key}
                        name={post.name}
                        role={post.role}
                        userName={post.userName}
                        time={post.time}
                        img={post.img}
                        bodyText={post.bodyText}
                        postImg={post.postImg}
                    />
                )
            })}
          </MainFeed>
        </MainAll>
    </>
  )
}

export default ProfilePageEdit;