import styled from "styled-components";
import { colors } from "../../ui/colors";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import Post from "../../components/Post";
import { posts } from "../../data/posts";
import AddPost from "./components/AddPost";



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
const MainFeed = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.new};
  width: 100%;
  max-width: 700px;
  gap: 30px;
  
  /* border: 1px solid red; //red */
`;

const SocialFeed = () => {
  return (
    <>
      <Main>
        <MainFeed>
          <Header
            key="1"
            name="Susana"
            lastName="Gonzalez"
            userName="@susygonzalez"
            img="https://images.pexels.com/photos/7841717/pexels-photo-7841717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />

          <AddPost />
            <Link to="/social-feed/1">Ver mas</Link>

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
      </Main>
    </>
  );
};

export default SocialFeed;
