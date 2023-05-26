import styled from "styled-components";
import { colors } from "../../ui/colors";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import Post from "../../components/Post";
import { posts } from "../../data/posts";
import AddPost from "./components/AddPost";
import { NewNavBarFeed } from "../../components/Navbar-feed";
import { user } from "../../data/user";
import { useState } from "react";
import FooterFeed from "../../components/Footer-feed";

let publicaciones = posts

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
  
  /* border: 1px solid red; //red */
`;

const FeedContainer = styled.main`
  display: flex;
  position: relative;
  @media (max-width: 1100px) {
    display: block;
  }
`

const SocialFeed = () => {

  const [pruebaPost, setPruebaPost] = useState(publicaciones)

  /* const getPosts = async () => {
    const response = await fetch("http://localhost:3001/posts");
    const data = await response.json();
    setPosts(data);
  }; */

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
            />

            <AddPost 
              name={user.name}
              lastName={user.lastName}
              role={user.role}
              userName={user.userName}
              img={user.img}
            />
              {/* {publicaciones.map((post)=>{
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
              })} */}

              {pruebaPost.map((post)=>{
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
              } )}
          </MainFeed>
          <FooterFeed></FooterFeed>
        </FeedContainer>
      </Main>
    </>
  );
};


export default SocialFeed;
