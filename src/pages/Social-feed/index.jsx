import styled from "styled-components";
import { colors } from "../../ui/colors";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import AddPost from "./components/AddPost";
import { NewNavBarFeed } from "../../components/Navbar-feed";
import { useState } from "react";
import Post from "../../components/Post";
import FooterFeed from "../../components/Footer-feed";

import { getAllPost } from "../../service/Gets/postService";
import { useEffect } from "react";
import LoaderFeed from "../../components/LoaderFeed";
import { readLocalStorage } from "../../Utilities/readLocalStorage";
import { getOwnUser } from "../../service/Gets/getOwnUserService";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.new};
  width: 100%;
  padding-top: 10vh;
  min-height: 100vh;
`;
export const MainFeed = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.new};
  width: 100%;
  max-width: 700px;
  gap: 30px;
  @media (max-width: 1100px) {
    margin-left: 0em;
  }
`;

const FeedContainer = styled.main`
  display: flex;
  position: relative;
  @media (max-width: 1100px) {
    display: block;
  }
`
const FooterContainer = styled.div`
  position: fixed;
  top: 10vh;
  width: 100%;
  padding-left: 10vw;
  @media (max-width: 1385px) {
    display: none;
  }
`
const userLocalStorage = readLocalStorage();

await getOwnUser(  userLocalStorage.id, userLocalStorage.token);

export const userImg = JSON.parse(localStorage.getItem("ownProfile"));

const SocialFeed = () => {
  const [userProfile, setUser] = useState(userLocalStorage)
  const [posts, getPosts] = useState([])
  const [loader, setLoader] = useState(true)



  useEffect(() => {
   const getMyUser = async () => {
      try{
        const user = await getOwnUser(userLocalStorage.id, userLocalStorage.token)
        setUser(user)
      }catch(error){
        console.error(error)
      }
    }
    getMyUser()
  }, [])


  /* useEffect(() => {
    const fetchPosts = async () => {
      try{
        console.log("fetching posts")
        const posts = await getAllPost()
        console.log(posts)
        getPosts(posts)
        setLoader(false)
      }catch(error){
        console.error(error)
      }
    }
    fetchPosts()
  }, []) */

  return (
    <>
      <NewNavBarFeed/>
      <Main>
      <FooterContainer>
          <FooterFeed/>
        </FooterContainer>
        <FeedContainer>
          <MainFeed>
            <Header
              key={userProfile.id}
              name={userProfile.user && userProfile.user.name}
              lastName={userProfile.user && userProfile.user.lastName}
              userName={userProfile.user && userProfile.user.username}
              img={userProfile.img}
              backGroundIMG={userProfile.background}
            />

          <AddPost 
            name={userProfile.name}
            lastName={userProfile.lastName}
            role={userProfile.role}
            userName={userProfile.userName}
            img={userProfile.img}
          />

          {loader ? <LoaderFeed/> : posts.map((post) => {
            return (
              <Post 
                id={post.id}
                key={post.id}
                firstName={post.name}
                lastName={post.lastName}
                userName={post.username}
                time={post.createdAt}
                role={post.role}
                bodyText={post.postBody}
                img={post.img}
                userId={post.id}
                postImg={post.imgSource}
              />
            );
          })}
        </MainFeed>
        </FeedContainer>
      </Main>
    </>
  );
};

export default SocialFeed;



