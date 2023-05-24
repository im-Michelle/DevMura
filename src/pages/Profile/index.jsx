import Header from '../Social-feed/components/Header';
import styled from 'styled-components';
import { NewNavBarFeed } from '../../components/Navbar-feed';
import { colors } from '../../ui/colors';
import { MainFeed } from '../Social-feed';

import { LearningInterests } from './components/LearningInterests';
import { ProgramingLeng } from './components/ProgramingLeng';
import { PersonalDescription } from './components/PersonalDescription';


import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MailIcon from '@mui/icons-material/Mail';

import Post from '../../components/Post';
import { posts } from "../../data/posts";

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
  display: flex;
`;
const EachIcon = styled.div`
  padding: 2rem;
`;

const ExtraInfo = styled.div`
  display: flex;
  justify-content: center;
`;




const ProfilePage = () => {
  return (
    <>
        <NewNavBarFeed/>
        <MainAll>
          <MainFeed>
              <Header 
                  name="Susana"
                  lastName="Gonzalez"
                  userName="@susygonzalez"
                  img="https://images.pexels.com/photos/7841717/pexels-photo-7841717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
              <PersonalDescription/>

              <ExtraInfo>
                <ProgramingLeng/>
                <LearningInterests/>
              </ExtraInfo>

              <GroupIcon>
                <EachIcon>
                  <PersonAddIcon color='primary'fontSize='large'/>
                </EachIcon>
                <EachIcon>
                  <MailIcon color='primary'fontSize='large'/>
                </EachIcon>
              </GroupIcon>

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

export default ProfilePage;