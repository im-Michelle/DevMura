import styled from 'styled-components';
import { NewNavBarFeed } from '../../components/Navbar-feed';
import { colors } from '../../ui/colors';
import HeaderProfile from './components/HeaderProfileIMG';
import HeaderProfileInfo from './components/HeaderProfileInfo';
import Languages from './components/Languages';
import SocialNetworks from './components/SocialNetworks';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUserByID } from '../../service/Gets/userService';
import Post from '../../components/Post';
import FriendAndMessage from './components/Friend';

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
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.new};
  width: 100vw;
  max-width: 700px;
  gap: 30px;
`

const profile = JSON.parse(localStorage.getItem('ownProfile'));
const token =  JSON.parse(localStorage.getItem('userDevmura'));
const userDevMura = JSON.parse(localStorage.getItem('userDevmura'));
const ownUser = JSON.parse(localStorage.getItem('ownProfile'));

const UserPage = () => {

  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const path = window.location.pathname.split("/")[2];

  useEffect(() => {
    const userPath = window.location.pathname.split("/")[2];
    getUserByID( userPath , token["token"])
      .then((res) => {
        setUser(res)
        setPosts(res.posts)
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
          {
            path == userDevMura.id ? <></> :
            <FriendAndMessage
              friend={false}
              linkToMessage="/message"
              aut={userDevMura.token}
              friendId={user.id}
              owndId={userDevMura.id}
            />
          }
        
            <SocialNetworks
              linkLinkedin={`${user.linkedin}`}
              linkGithub={`${user.github}`}
            />
            <Languages
              languages={user.languageProfiles}
            />

            <PostContainer>
              {
              posts.map((post) => (
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

export default UserPage;