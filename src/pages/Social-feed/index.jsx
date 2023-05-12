import { NavBarFeed } from "../../components/Navbar-feed";
import styled from "styled-components";
import { colors } from "../../ui/colors";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import Post from "../../components/Post";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.new};
  width: 100%;
  padding-top: 10vh;
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
      <NavBarFeed />
      <Main>
        <MainFeed>
          <Header
            name="Susana"
            lastName="Gonzalez"
            userName="@susygonzalez"
            img="https://images.pexels.com/photos/7841717/pexels-photo-7841717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
            <Link to="/social-feed/1">Ver mas</Link>

            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
            < Post/>
        </MainFeed>
      </Main>
    </>
  );
};

export default SocialFeed;
