import styled from "styled-components";
import { colors } from "../../ui/colors";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import AddPost from "./components/AddPost";
import { NewNavBarFeed } from "../../components/Navbar-feed";
import { user } from "../../data/user";
import { useState } from "react";
import Post from "../../components/Post";
import FooterFeed from "../../components/Footer-feed";

import { getAllPost } from "../../service/postService";
import { useEffect } from "react";
import LoaderFeed from "../../components/LoaderFeed";

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
  margin-left: 13em;
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

const SocialFeed = () => {

  const [posts, getPosts] = useState([])
  const [loader, setLoader] = useState(true)

  useEffect(() => {
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
  }, [])

  return (
    <>
      <NewNavBarFeed/>
      <Main>
        <FeedContainer>
          <MainFeed>
            <Header
              key={user.id}
              name={user.name}
              lastName={user.lastName}
              userName={user.userName}
              img={user.img}
              backGroundIMG={user.backGroundIMG}
            />

          <AddPost 
            name={user.name}
            lastName={user.lastName}
            role={user.role}
            userName={user.userName}
            img={user.img}
          />

          {loader ? <LoaderFeed/> : posts.map((post) => {
            return (
              <Post 
                id={post.id}
                key={post.id}
                firstName={post.user.name}
                lastName={post.user.lastName}
                userName={post.user.username}
                time={post.createdAt}
                role={post.user.profile && post.user.profile.role}
                bodyText={post.postBody}
                img={post.user.profile && post.user.profile.img}
                userId={post.user.id}
                postImg={post.imgSource}
              />
            );
          })}
        </MainFeed>
        <FooterFeed/>
        </FeedContainer>
      </Main>
    </>
  );
};

export default SocialFeed;



