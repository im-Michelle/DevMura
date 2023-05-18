import React from "react";
import NavbarDefault from "../../components/Navbar-Default";
import TitleHead from "../../components/TitleHead";
import "./AboutUs.css";
import "../../components/CardAboutUs/cardAbout.css"
import Footer from "../../components/Footer";
import styled from "@emotion/styled";
import { colors } from "../../ui/colors";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import IndividualCards from "../../components/CardAboutUs/IndividualCards";
import CardContainer from "../../components/CardAboutUs/CardContainer";



const Main = styled.main`
  width: 100%;
`;

const AboutDevMura = styled.section`
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
  p{
    color: ${colors.primaryText};
    width: 70%;
    text-align: center;
    font-size: 1.3rem;
  }
`

const SloganDevMura = styled.section`
  width: 100%;
  height: fit-content;
  background-color: ${colors.new};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 40px 0;
  p{
    color: ${colors.primaryText};
    width: 70%;
    text-align: center;
    font-size: 1.3rem;
  }
`

const AboutDevMuraDiv = styled.section`
    box-shadow: 0px 0px 10px 0px #0000005e;
    width: 80%;
    max-width: 1700px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 60px 0;
    flex-wrap: wrap;
`

const AboutCodeFusion = styled.section`
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
    font-size: 1.7rem;
  }
`
const CardsOfCodeFusion = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 60px 0;
    flex-wrap: wrap;
    
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.primaryText};
  &:hover{
    background-color: ${colors.contrast};
    color: ${colors.primaryText};
  }
`

const CustomUl = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
`

const SVGsocial = styled.img`
  width: 40px;
  height: 40px;
  aspect-ratio: 1/1;
  object-fit: cover;
  filter: invert(1);
  transition: all 0.5s ease-in-out;
  &:hover{
    transform: scale(1.2);
  }
  @media (min-width: 768px){
    width: 60px;
    height: 60px;
  }
`

const AboutUs = () => {
    return(
        <>
            <NavbarDefault />
            <Main>
                <TitleHead titulo="About Us" imageUrl="./img/background-AboutUs.png"/>
                <AboutDevMura>
                    <AboutDevMuraDiv>
                        <h2> DevMura </h2>
                        <p> Our project is a social network designed for people who are learning to program. We offer an online platform where users can connect with other programming learners to share knowledge, resources, and projects. Our goal is to create an interactive online community where users can collaborate and improve their programming skills to advance their careers in technology. </p> 
                    </AboutDevMuraDiv>
                    <SloganDevMura>
                      <p> Connected through code: With DevMura, discover your fullstack development community. </p>
                    </SloganDevMura>
                </AboutDevMura>
                <AboutCodeFusion>
                    <h2> Get to know us </h2>
                    <CardsOfCodeFusion>
                      <CardContainer>
                        <IndividualCards
                          img="img/img-AboutUs/Ale.png"
                          name="Alejandra Chaparro"
                          alt="Alejandra Chaparro"
                          rol="Java Developer"
                          description="Java programmer with experience in Scrum. Passionate about learning and design, focused on organizing and leading teams effectively. Always seeking new opportunities to grow and develop professionally."             
                        />
                        <IndividualCards
                          img="img/img-AboutUs/goyo.png"
                          name="Gregorio Espinoza"
                          alt="Gregorio Espinoza"
                          rol="Software developer Jr. Trainee Intern"
                          description="Analytical, committed and persistent professional. Always ready to face new challenges with positive attitude and creativity. Fast learner and great team worker. Also, eager to learn new skills to improve my professional career."             
                        />
                        <IndividualCards
                          img="img/img-AboutUs/fati.png"
                          name="Fatima Moreno"
                          alt="Fatima Moreno"
                          rol="Java Developer"
                          description="En construcción"             
                        />
                        <IndividualCards
                          img="img/img-AboutUs/omar.png"
                          name="Omar Michaca"
                          alt="Omar Michaca"
                          rol="Java Developer"
                          description="
                          Versatile professional with adaptability, transitioning from Administration to Full Stack, bringing project management, problem-solving, and decision-making skills. Demonstrates analytical mindset and attention to detail. Excited about the exciting career change."             
                        />
                      </CardContainer>
                      <CardContainer>
                        <IndividualCards
                          img="img/img-AboutUs/sofi.png"
                          name="Sofia Gomez"
                          alt="Sofia Gomez"
                          rol=" Web developer trainee"
                          description="Full stack development apprentice with a biology background, finds inspiration in merging novel technologies into nature-based solutions."             
                        />
                        <IndividualCards
                          img="Coming soon"
                          name="Michelle Trejo"
                          alt="Coming soon"
                          rol="Java Developer"
                          description=" Java Developer with expertise in Spring Boot framework. Skilled in designing and building robust web applications, integrating databases, and optimizing performance. Strong knowledge of Spring Data, RESTful APIs, and secure authentication. Continuously learning and staying updated with the latest developments in software development."             
                        />
                          <IndividualCards
                          img="img/img-AboutUs/david.jpg"
                          name="David Vazquez"
                          alt="David Vazquez"
                          rol="Front-end developer"
                          description="En construcción"             
                        />  
                         <IndividualCards
                          img="Coming soon"
                          name="Alvaro González"
                          alt="Coming soon"
                          rol="Java Developer"
                          description="En construcción"             
                        />
                      </CardContainer>
                    </CardsOfCodeFusion>
                </AboutCodeFusion>
                <Footer />
            </Main>
        </>
    );
};

export default AboutUs;