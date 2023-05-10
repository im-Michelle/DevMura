import React from "react";
import "./Home.css";
import NavbarDefault from "../../components/Navbar-Default";
import styled from "@emotion/styled";
import TestiMonialCard from "../../components/Card";

import { colors } from "../../ui/colors";

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
    color: ${colors.primaryText};
    text-align: center;
    width: 90%;
    max-width: 800px;
  }
  h2 {
    font-size: 2rem;
    color: ${colors.secondaryText};
    text-align: center;
    width: 90%;
    max-width: 800px;
  }
`;
const PlatformDescription = styled.section`
  width: 100%;
  height: fit-content;
  background-color: ${colors.background};
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
  /* background-color: ${colors.navy}; */
  height: fit-content;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  position: relative;
  transition: all 0.5s ease-in-out;
  box-shadow: 0px 0px 10px 0px #0000005e;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 10px 0px #0000005e;
  }
  @media (min-width:  953px) {
    width: 30%;
    height: 500px;
  }
  img {
    width: 100%;
    border-radius: 20px;
    display: block;
  }
  h2 {
    color: ${colors.primaryText};
    width: 90%;
    text-align: center;
    font-size: 2rem;
    position: relative;
    
  }
`;
const Tecnologies = styled.section`
  width: 100%;
  height: fit-content;
  background-color: ${colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 60px 0;
  h2 {
    color: ${colors.primaryText};
    width: 90%;
    text-align: center;
    font-size: 2rem;
  }
`
const Testimonials = styled.section`
  width: 100%;
  height: fit-content;
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 60px 0;
  h2{
    color: ${colors.primaryText};
    width: 90%;
    text-align: center;
    font-size: 2rem;

  }
`
const TestimonialsCards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 60px 0;
    flex-wrap: wrap;
`

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

        <Tecnologies>
          <h2>Accelerate high-quality software development. </h2>
          <ul>
            <li>
              <img src="./img/tecnologies/html5.png" alt="" />
            </li>
          </ul>
        </Tecnologies>

        <Testimonials>
          <h2>What developers are saying about DevMura</h2>
          <TestimonialsCards>
           <TestiMonialCard 
           img="https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           name="John Doe"
           descripotin="DevMura has been a game-changer for me. I've connected with talented fullstack developers from around the world, collaborated on exciting projects, and expanded my knowledge through insightful discussions. It's a thriving community that fosters growth and empowers developers to achieve their full potential."
           />
           <TestiMonialCard 
           img="https://images.pexels.com/photos/12659913/pexels-photo-12659913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           name="Steve Bell"
           descripotin="DevMura has become my go-to platform for networking with fellow fullstack developers. The community is incredibly supportive, and I've received valuable feedback on my projects. It's an excellent resource for finding collaboration opportunities and staying up-to-date with the latest trends in the industry."
           />
           <TestiMonialCard 
           img="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           name="Jane Smith"
           descripotin="Being a part of DevMura has been an enriching experience. The platform provides a dedicated space for fullstack developers to connect and learn from each other. The discussions are insightful, and the resources available have helped me enhance my skills. I highly recommend DevMura to any fullstack developer looking to grow both personally and professionally."
           />
           <TestiMonialCard 
           img="https://images.pexels.com/photos/1727003/pexels-photo-1727003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           name="Miranda Miller"
           descripotin="DevMura has exceeded my expectations. It has opened doors to new opportunities and allowed me to collaborate with talented fullstack developers who share similar passions. The platform's intuitive interface and active community make it easy to connect and engage in meaningful conversations. I'm grateful for the connections and friendships I've made through DevMura."
           />
           </TestimonialsCards>
        </Testimonials>
      </Main>
    </>
  );
};

export default Home;
