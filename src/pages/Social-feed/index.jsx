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
      <NavBarFeed />
      <Main>
        <MainFeed>
          <Header
            key="1"
            name="Susana"
            lastName="Gonzalez"
            userName="@susygonzalez"
            img="https://images.pexels.com/photos/7841717/pexels-photo-7841717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
            <Link to="/social-feed/1">Ver mas</Link>

            < Post
            key={1}
            name="Rodrigo"
            role="Frontend Developer"
            userName="@rodrigodev"
            time="1h"
            img="https://images.pexels.com/photos/4275717/pexels-photo-4275717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            bodyText="Lorem ius fugit aliquid ut amet autem. Vero quaerat culpa accusantium voluptate animi in quia sequi?"
            />
            < Post
            key={2}
            name="Julio"
            role="Fullstack Developer"
            userName="@Miguel"
            time="1h"
            img="https://images.pexels.com/photos/9950569/pexels-photo-9950569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            bodyText="Lorem ius fugit aliquid ut amet autem. Vero quaerat culpa accusantium voluptate animi in quia sequi?"
            />
            < Post
            key={3}
            name="Rodrigo"
            role="Frontend Developer"
            userName="@rodrigodev"
            time="1h"
            img="https://images.pexels.com/photos/4275717/pexels-photo-4275717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            bodyText="Lorem ius fugit aliquid ut amet autem. Vero quaerat culpa accusantium voluptate animi in quia sequi?"
            />
            < Post
            key={4}
            name="Rodrigo"
            role="Frontend Developer"
            userName="@rodrigodev"
            time="1h"
            img="https://images.pexels.com/photos/4275717/pexels-photo-4275717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            bodyText="Lorem ius fugit aliquid ut amet autem. Vero quaerat culpa accusantium voluptate animi in quia sequi?"
            />
            < Post
            key={5}
            name="Rodrigo"
            role="Frontend Developer"
            userName="@rodrigodev"
            time="1h"
            img="https://images.pexels.com/photos/4275717/pexels-photo-4275717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            bodyText="Lorem ius fugit aliquid ut amet autem. Vero quaerat culpa accusantium voluptate animi in quia sequi?"
            />
            
        </MainFeed>
      </Main>
    </>
  );
};

export default SocialFeed;
