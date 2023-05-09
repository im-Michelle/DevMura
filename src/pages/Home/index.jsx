import React from "react";
import "./Home.css";
import NavbarDefault from "../../components/Navbar-Default";
import styled from "@emotion/styled";

const Main = styled.main`
  width: 100%;
`;
const Header = styled.header`
  width: 100%;
  height: 90vh;
  background-image: url("./img/pexels-marcus-vinícius-a-ribeiro-2825033.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    background-color: #00000097;
    font-size: 4rem;
    color: #ffffff;
    text-align: center;
    width: 90%;
    max-width: 800px;
  }
  h2 {
    font-size: 2rem;
    background-color: #00000097;
    color: #9a9090;
    text-align: center;
    width: 90%;
    max-width: 800px;
  }
`;
const PlatformDescription = styled.section`
  width: 100%;
  height: fit-content;
  background-color: #263339;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 60px 0;
  @media (min-width: 953px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
`;
const Card = styled.div`
  background-color: #a9dbdc3a;
  border-radius: 20px;
  height: fit-content;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  @media (min-width:  953px) {
    width: 30%;
    height: 400px;
  }

  img {
    width: 200px;
    border-radius: 20px;
  }
  h2 {
    color: #ffffff;
    width: 90%;
    text-align: center;
    font-size: 2rem;
  }
`;

const Home = () => {
  return (
    <>
      <NavbarDefault />
      <Main>
        <Header>
          <h1>Join the Fullstack Developer Community on DevMura</h1>
          <h2>Connect with Fullstack Developer Worldwide on DevMura</h2>
        </Header>
        <PlatformDescription>
          <Card>
            <img
              src="./img/undraw_cloud_hosting_7xb1.svg"
              alt=""
            />
            <h2>
              DevMura is a dedicated social network for fullstack developers
            </h2>
          </Card>
          <Card>
            <img
              src="./img/undraw_work_chat_re_qes4.svg"
              alt=""
            />
            <h2>Discover a vibrant community</h2>
          </Card>
          <Card>
            <img
              src="./img/undraw_work_time_re_hdyv.svg"
              alt=""
            />
            <h2>
              Connect, collaborate, and learn from fellow developers in your
              field
            </h2>
          </Card>
        </PlatformDescription>
      </Main>
    </>
  );
};

export default Home;
