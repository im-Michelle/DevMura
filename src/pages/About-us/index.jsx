import React from "react";
import NavbarDefault from "../../components/Navbar-Default";
import "./AboutUs.css";
import "../../components/CardAboutUs/cardAbout.css"

import styled from "@emotion/styled";

import { colors } from "../../ui/colors";
import IndividualCards from "../../components/CardAboutUs/IndividualCards";
import CardContainer from "../../components/CardAboutUs/CardContainer";

const Main = styled.main`
  width: 100%;
`;

const Header = styled.header`
  width: 100%;
  height: 90vh;
  background-image: url("./img/background-AboutUs.png");
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
    font-size: 1.5rem;
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

const AboutUs = () => {
    return(
        <>
            <NavbarDefault />
            <Main>
                <Header>
                    <h1> About us </h1>
                </Header>
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
                          img="../../../public/img/img-AboutUs/Ale.png"
                          name="Alejandra Chaparro"
                          rol="Java Developer"
                          description="Java programmer with experience in Scrum. Passionate about learning and design, focused on organizing and leading teams effectively. Always seeking new opportunities to grow and develop professionally."             
                        />
                        <IndividualCards
                          img="../../../public/img/img-AboutUs/goyo.jfif"
                          name="Gregorio Espinoza"
                          rol="Software developer Jr. Trainee Intern"
                          description="Analytical, committed and persistent professional. Always ready to face new challenges with positive attitude and creativity. Fast learner and great team worker. Also, eager to learn new skills to improve my professional career."             
                        />
                        <IndividualCards
                          img="../../../public/img/img-AboutUs/fati.png"
                          name="Fatima Moreno"
                          rol="Product owner"
                          description=" "             
                        />
                        <IndividualCards
                          img="../../../public/img/img-AboutUs/omar.png"
                          name="Omar Michaca"
                          rol="Product owner"
                          description="
                          Versatile professional with adaptability, transitioning from Administration to Full Stack, bringing project management, problem-solving, and decision-making skills. Demonstrates analytical mindset and attention to detail. Excited about the exciting career change."             
                        />
                      </CardContainer>
                      <CardContainer>
                        <IndividualCards
                          img="../../../public/img/img-AboutUs/sofi.png"
                          name="Sofia Gomez"
                          rol=" Web developer trainee"
                          description="Full stack development apprentice with a biology background, finds inspiration in merging novel technologies into nature-based solutions."             
                        />
                        <IndividualCards
                          img="https://i1.sndcdn.com/artworks-h8POPWJhl5r53DTW-BoDziw-t500x500.jpg"
                          name="Michelle"
                          rol="Product owner"
                          description=" "             
                        />
                          <IndividualCards
                          img="https://images.alphacoders.com/116/1168233.png"
                          name="David"
                          rol="Product owner"
                          description=" "             
                        />  
                         <IndividualCards
                          img="https://super-ficcion.com/wp-content/uploads/2021/12/DCs-Nightwing-Filmdrehbuch-ist-eine-Ur-Rache-Geschichte2webp-780x470.webp"
                          name="Alvaro"
                          rol="Product owner"
                          description="."             
                        />
                      </CardContainer>
                    </CardsOfCodeFusion>
                </AboutCodeFusion>
            </Main>
        </>
    );
};

export default AboutUs;