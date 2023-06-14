import styled from "styled-components";
import { colors } from "../../ui/colors";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import AddPost from "./components/AddPost";
import { NewNavBarFeed } from "../../components/Navbar-feed";
import { useState, useEffect } from "react";
import Post from "../../components/Post";

import { getAllPost } from "../../service/Gets/postService";
import LoaderFeed from "../../components/LoaderFeed";
import { readLocalStorage } from "../../Utilities/readLocalStorage";
import { getOwnUser } from "../../service/Gets/getOwnUserService";
import InfiniteScroll from "react-infinite-scroll-component";

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
`;

const FeedContainer = styled.main`
  display: flex;
  position: relative;
  @media (max-width: 1100px) {
    display: block;
  }
`
const InfiniteScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.new};
  width: 100%;
  max-width: 700px;
  gap: 30px;
`

const SocialFeed = () => {
  const [userProfile, setUser] = useState({})
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(0)


  const ownUserProfile = readLocalStorage()
  const token = JSON.parse(localStorage.getItem("userDevmura")).token
  const id = JSON.parse(localStorage.getItem("userDevmura")).id

  useEffect(() => {
    if(localStorage.getItem("userDevmura") === null) window.location.replace("/")
  }, [])

  useEffect(() => {
   const getMyUser = async () => {
      try{
        const user = await getOwnUser(ownUserProfile.id, ownUserProfile.token)
        setUser(user)
      }catch(error){
        console.error(error)
      }
    }
    getMyUser()
  }, [])


  useEffect(() => {
    const fetchPosts = async () => {
      try{
        const posts = await getAllPost(page)
        setPage(page + 1)
        setPosts(posts)
      }catch(error){
        console.error(error)
      }
    }
    fetchPosts()
  }, [])

  const fetchMoreData = async () => {
    setPage(page + 1)
    try{
      const newPosts = await getAllPost(page)
      setPosts([...posts, ...newPosts])
    }catch(error){
    console.error(error)
    }
  }

  return (
    <>
      <NewNavBarFeed
        userImg={userProfile.img}
      />
      <Main>
        <FeedContainer>
          <MainFeed>
            <Header
              key={userProfile.id}
              name={userProfile.name}
              lastName={userProfile.lastName}
              userName={userProfile.username}
              img={userProfile.img}
              backGroundIMG={userProfile.background}
            />

          <AddPost 
            aut={token}
            id={id}
          />

          <InfiniteScrollContainer>
            <InfiniteScroll
            dataLength={posts.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<LoaderFeed/>}
            endMessage={<p>Yay! You have seen it all</p>}
            >
              {posts.map((post) => (
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
                />
                ))}
            </InfiniteScroll>
          </InfiniteScrollContainer>

        </MainFeed>
        </FeedContainer>
      </Main>
    </>
  );
};

export default SocialFeed;



