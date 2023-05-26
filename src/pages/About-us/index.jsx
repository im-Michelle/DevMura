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
    font-size: 5rem;
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

const AboutValues = styled.section`
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
    font-size: 2.3rem;
  }
  p{
    color: ${colors.primaryText};
    width: 70%;
    text-align: center;
    font-size: 1.3rem;
  }
`

const AboutOurValuesDiv = styled.section`
    width: 100%;
    max-width: 1700px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1px;
    background-color: ${colors.primaryText};
`

const OurValues = styled.section`
    width: 100%;
    max-width: 1700px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex: 1;  
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }  
`

const ValuesText = styled.header`
  width: 100%;
  height: 90vh;
  background-image: url(${props => props.imageUrl});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutUs = () => {
    return(
        <>
            <NavbarDefault />
            <Main>
                <TitleHead titulo="About Us" imageUrl="https://images.pexels.com/photos/12194164/pexels-photo-12194164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <AboutDevMura>
                    <AboutDevMuraDiv>
                        <h2> DevMura </h2>
                        <p> Our project is a social network designed for people who are learning to program. We offer an online platform where users can connect with other programming learners to share knowledge, resources, and projects. Our goal is to create an interactive online community where users can collaborate and improve their programming skills to advance their careers in technology. </p> 
                    </AboutDevMuraDiv>
                    <SloganDevMura>
                      <p> Connected through code: With DevMura, discover your fullstack development community </p>
                    </SloganDevMura>
                </AboutDevMura>

                <AboutValues>
                  <h2> Our Values</h2>
                  <AboutOurValuesDiv>
                    <OurValues>
                      <ValuesText imageUrl="https://images.pexels.com/photos/8108099/pexels-photo-8108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"> <h2> Community and Collaboration </h2> </ValuesText>
                    </OurValues>
                    <OurValues>
                      <ValuesText imageUrl="https://images.pexels.com/photos/8108099/pexels-photo-8108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"> <h2> Respect </h2> </ValuesText>
                    </OurValues>
                    <OurValues>
                      <ValuesText imageUrl="https://images.pexels.com/photos/8108099/pexels-photo-8108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"> <h2> Innovation </h2> </ValuesText>
                    </OurValues>
                    <OurValues>
                      <ValuesText imageUrl="https://images.pexels.com/photos/8108099/pexels-photo-8108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"> <h2> Security and Privacy </h2> </ValuesText>
                    </OurValues>
                    <OurValues>
                      <ValuesText imageUrl="https://images.pexels.com/photos/8108099/pexels-photo-8108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"> <h2> Honesty </h2> </ValuesText>
                    </OurValues>
                  </AboutOurValuesDiv>
                </AboutValues>

                <AboutCodeFusion>
                    <h2> Get to know us </h2>
                    <CardsOfCodeFusion>
                      <CardContainer>
                        <IndividualCards
                          img="img/img-AboutUs/Ale.png"
                          name="Alejandra Chaparro"
                          rol="Full Stack Java Developer"
                          description="Java programmer with experience in Scrum. Passionate about learning and design, focused on organizing and leading teams effectively. Always seeking new opportunities to grow and develop professionally."             
                        />
                        <IndividualCards
                          img="img/img-AboutUs/goyo.png"
                          name="Gregorio Espinoza"
                          rol="Software Developer Jr. Trainee Intern"
                          description="Analytical, committed and persistent professional. Always ready to face new challenges with positive attitude and creativity. Fast learner and great team worker. Also, eager to learn new skills to improve my professional career."             
                        />
                        <IndividualCards
                          img="img/img-AboutUs/fati.png"
                          name="Fatima Moreno"
                          rol="Full Stack Trainee"
                          description="Passionate about programming languages, teamwork, and eager to learn new things."             
                        />
                        <IndividualCards
                          img="img/img-AboutUs/omar.png"
                          name="Omar Michaca"
                          rol="Java Developer"
                          description="
                          Versatile professional with adaptability, transitioning from Administration to Full Stack, bringing project management, problem-solving, and decision-making skills. Demonstrates analytical mindset and attention to detail. Excited about the exciting career change."             
                        />
                      </CardContainer>
                      <CardContainer>
                        <IndividualCards
                          img="img/img-AboutUs/sofi.png"
                          name="Sofia Gomez"
                          rol=" Web Developer trainee"
                          description="Full stack development apprentice with a biology background, finds inspiration in merging novel technologies into nature-based solutions."             
                        />
                        <IndividualCards
                          img="https://avatars.githubusercontent.com/u/92353536?v=4"
                          name="Michelle Trejo"
                          rol="Java Developer"
                          description=" Java Developer with expertise in Spring Boot framework. Skilled in designing and building robust web applications, integrating databases, and optimizing performance. Strong knowledge of Spring Data, RESTful APIs, and secure authentication. Continuously learning and staying updated with the latest developments in software development."             
                        />
                          <IndividualCards
                          img="img/img-AboutUs/david.jpg"
                          name="David Vazquez"
                          rol="Front-end Developer"
                          description="As a front-end developer, I create attractive and functional user interfaces for web and mobile applications. I use HTML, CSS, and JavaScript to bring designs to life, ensuring a great user experience. I work with frameworks like React and collaborate with designers and back-end developers. Continuous learning keeps me up to date with the latest trends and technologies."             
                        />  
                         <IndividualCards
                          img="https://preview.redd.it/3x46-yo-alexeto-ft-alexelcapo-2-v0-g0wrey67zyb91.jpg?auto=webp&s=aeff6a2f983e3c25a87d161f8a6e542d4c480b81"
                          name="Alvaro González"
                          rol="Web Developer Trainee"
                          description="Full stack development apprentice with a physio therapy background, with the vision to creat amazing development solutions"             
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