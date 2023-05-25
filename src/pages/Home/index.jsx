import React from "react";
import "./Home.css";
import NavbarDefault from "../../components/Navbar-Default";
import styled from "@emotion/styled";
import TestiMonialCard from "../../components/Card";

import { colors } from "../../ui/colors";
import { Link } from "react-router-dom";

import CustomButton from "../../components/Button/index";
import Footer from "../../components/Footer";

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
  background-color: ${colors.new};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 5vh 0;
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
  //padding: 20px;
  position: relative;
  transition: all 0.5s ease-in-out;
  box-shadow: 0px 0px 10px 0px #0000005e;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 10px 0px #0000005e;
  }
  @media (min-width:  953px) {
    width: 30%;
    height: fit-content;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  background-color: ${colors.new};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 100px 0;
  h2 {
    color: ${colors.primaryText};
    width: 90%;
    text-align: center;
    font-size: 2rem;
    padding-bottom: 5rem;
  }
  li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    @media (min-width: 953px) {
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      gap: 6rem;
    }
  }
  img{
    width: 150px;
    height: 150px;
    aspect-ratio: 3/2;
    object-fit: cover; 
  }
`
const Testimonials = styled.section`
  width: 100%;
  height: fit-content;
  background-color: ${colors.new};
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
const CallToAction = styled.section`
  width: 100%;
  height: fit-content;
  background-color: ${colors.new};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 60px 0;
`
const CallToActionH2 = styled.h2`
  color: ${colors.primaryText};
  width: 90%;
  text-align: left;
  font-size: 4rem;
 
`
const CallToActionH22 = styled.h2`
  color: ${colors.secondaryText};
  width: 90%;
  text-align: left;
  font-size: 2rem;
`
const CallToActionButton = styled(Link)`
  background-color: ${colors.contrast};
  width: 90%;
  max-width: 800px;
  text-align: center;
  color: ${colors.primaryText};
  padding: 20px 40px;
  border-radius: 10px;
  font-size: 2rem;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  &:hover{
    background-color: #c23d48;
    color: #ffffff;
  }
`;
const Features = styled.section`
  width: 100%;
  height: fit-content;
  background-color: ${colors.new};
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
const FeaturesDiv = styled.div`
    box-shadow: 0px 0px 10px 0px #0000005e;
    width: 90%;
    max-width: 1700px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    //padding: 60px 0;
    flex-wrap: wrap;
`
const FeaturesCard = styled.div`
  width: 90%;
  max-width: 400px;
  height: fit-content;
  background-color: ${colors.new};
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
  p{
    color: ${colors.secondaryText};
    width: 90%;
    text-align: center;
    font-size: 1.5rem;
  }
  img{
    width: 200px;
    height: 200px;
    aspect-ratio: 3/2;
    object-fit: cover;
    filter: invert(1);
  }
`
const Devmura = styled.section`
  width: 100%;
  height: fit-content;
  background-image: url("img/pexels-steve-johnson-12594043.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 60px 0;
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
        <Features>
          <h2>Features </h2>
          <FeaturesDiv>
            <FeaturesCard>
              <img src="https://www.svgrepo.com/show/447223/admin-users.svg" alt="" />
              <h2>User Profiles</h2>
              <p>
                Create your personalized profile and showcase your skills and experience.
              </p>
            </FeaturesCard>
            <FeaturesCard>
              <img src="https://www.svgrepo.com/show/447388/groups.svg" alt="" />
              <h2>Thematic Groups</h2>
              <p>
                Join groups focused on specific technologies, frameworks, or interests.
              </p>
            </FeaturesCard>
            <FeaturesCard>
              <img src="https://www.svgrepo.com/show/447380/format-status.svg" alt="" />
              <h2>Real-time Chat</h2>
              <p>
                Engage in live discussions and exchange ideas with fellow fullstack developers.
              </p>
            </FeaturesCard>
            <FeaturesCard>
              <img src="https://www.svgrepo.com/show/447539/welcome-write-blog.svg" alt="" />
              <h2>Project Collaboration</h2>
              <p>
              Find collaborators for your projects and work together seamlessly.
              </p>
            </FeaturesCard>

          </FeaturesDiv>
        </Features>
        <Tecnologies>
          <h2>Trusted by the world’s leading organizations.</h2>
          <ul>
            <li>
              <img src="https://www.svgrepo.com/show/354068/microsoft.svg" alt="microsoft" />
              <img src="https://www.svgrepo.com/show/303123/bmw-logo.svg" alt="bmw" />
              <img src="https://www.svgrepo.com/show/303303/oracle-6-logo.svg" alt="oracle" />
              <img src="https://www.svgrepo.com/show/303125/apple-logo.svg" alt="apple" />
              <img src="https://www.svgrepo.com/show/303246/google-1-1-logo.svg" alt="google" />
            </li>
          </ul>
        </Tecnologies>
        <Testimonials>
          <h2>What developers are saying about DevMura</h2>
          <TestimonialsCards>
           <TestiMonialCard 
           img="https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           name="John Doe"
           description="DevMura has been a game-changer for me. I've connected with talented fullstack developers from around the world, collaborated on exciting projects, and expanded my knowledge through insightful discussions. It's a thriving community that fosters growth and empowers developers to achieve their full potential."
           />
           <TestiMonialCard 
           img="https://images.pexels.com/photos/12659913/pexels-photo-12659913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           name="Steve Bell"
           description="DevMura has become my go-to platform for networking with fellow fullstack developers. The community is incredibly supportive, and I've received valuable feedback on my projects. It's an excellent resource for finding collaboration opportunities and staying up-to-date with the latest trends in the industry."
           />
           <TestiMonialCard 
           img="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           name="Jane Smith"
           description="Being a part of DevMura has been an enriching experience. The platform provides a dedicated space for fullstack developers to connect and learn from each other. The discussions are insightful, and the resources available have helped me enhance my skills. I highly recommend DevMura to any fullstack developer looking to grow both personally and professionally."
           />
           <TestiMonialCard 
           img="https://images.pexels.com/photos/1727003/pexels-photo-1727003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           name="Miranda Miller"
           description="DevMura has exceeded my expectations. It has opened doors to new opportunities and allowed me to collaborate with talented fullstack developers who share similar passions. The platform's intuitive interface and active community make it easy to connect and engage in meaningful conversations. I'm grateful for the connections and friendships I've made through DevMura."
           />
           </TestimonialsCards>
        </Testimonials>
        <CallToAction>
          <CallToActionH2>Join Now and become part of the vibrant fullstack community!</CallToActionH2>
          <CallToActionH22>Get Started Today and unlock a world of opportunities for fullstack developers!</CallToActionH22>
          <CustomButton onClick={'#'} backgrdColor={colors.new}>Join Now</CustomButton>
          {/* <CallToActionButton to="/">Join Now</CallToActionButton> */}
        </CallToAction>
        <Devmura>
          <img src="img/icono-logo-blanco.svg" alt="" />
        </Devmura>

        <Footer />
      </Main>
    </>
  );
};

export default Home;
