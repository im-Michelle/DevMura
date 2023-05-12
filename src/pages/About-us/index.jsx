import React from "react";
import NavbarDefault from "../../components/Navbar-Default";
import "./AboutUs.css";
import "../../components/CardAboutUs/cardAbout.css"

import styled from "@emotion/styled";

import { colors } from "../../ui/colors";
import IndividualCards from "../../components/CardAboutUs/CardAboutUs";

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
    font-size: 2rem;
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
                </AboutDevMura>
                <SloganDevMura>
                    <p> Connected through code: With DevMura, discover your fullstack development community. </p>
                </SloganDevMura>
                <AboutCodeFusion>
                    <h2> Get to know us </h2>
                    <CardsOfCodeFusion>
                        <div class="card-container">
                            <IndividualCards
                            img="https://i.pinimg.com/originals/92/04/8b/92048b481309ee9268fba08ac1462c7f.jpg"
                            name="Bachira Meguru"
                            rol="Product owner"
                            description="My name is Bachira and I am a passionate student of Java software development. I first became interested in this language during my university studies, where I had the opportunity to take some courses in object-oriented programming and databases with Java."             
                            />
                            <IndividualCards
                            img="https://www.egames.news/__export/1673217138620/sites/debate/img/2023/01/08/vash_trigun_stampede_2_crop1673217083610.jpg_1939896235.jpg"
                            name="Vash Stampede"
                            rol="Product owner"
                            description="My name is Bachira and I am a passionate student of Java software development. I first became interested in this language during my university studies, where I had the opportunity to take some courses in object-oriented programming and databases with Java."             
                            />
                            <IndividualCards
                            img="https://i.pinimg.com/736x/ed/5f/cf/ed5fcfaa0b7e6fe6860f9b0cdba494ab.jpg"
                            name="Buda"
                            rol="Product owner"
                            description="My name is Bachira and I am a passionate student of Java software development. I first became interested in this language during my university studies, where I had the opportunity to take some courses in object-oriented programming and databases with Java."             
                            />
                            <IndividualCards
                            img="https://i.pinimg.com/originals/cf/f8/31/cff831a4147d4ee2ae3e19e9a15b5df7.jpg"
                            name="Wyn"
                            rol="Product owner"
                            description="My name is Bachira and I am a passionate student of Java software development. I first became interested in this language during my university studies, where I had the opportunity to take some courses in object-oriented programming and databases with Java."             
                            />
                        </div>
                        <div class="card-container">
                            <IndividualCards
                            img="https://pbs.twimg.com/profile_images/1015582761585803265/lZxIBMhS_400x400.jpg"
                            name="akashi seijuro"
                            rol="Product owner"
                            description="My name is Bachira and I am a passionate student of Java software development. I first became interested in this language during my university studies, where I had the opportunity to take some courses in object-oriented programming and databases with Java."             
                            />
                            <IndividualCards
                            img="https://i1.sndcdn.com/artworks-h8POPWJhl5r53DTW-BoDziw-t500x500.jpg"
                            name="itadori yuji"
                            rol="Product owner"
                            description="My name is Bachira and I am a passionate student of Java software development. I first became interested in this language during my university studies, where I had the opportunity to take some courses in object-oriented programming and databases with Java."             
                            />
                            <IndividualCards
                            img="https://images.alphacoders.com/116/1168233.png"
                            name="Thoma"
                            rol="Product owner"
                            description="My name is Bachira and I am a passionate student of Java software development. I first became interested in this language during my university studies, where I had the opportunity to take some courses in object-oriented programming and databases with Java."             
                            />  

                        <div class="card-container">
                            <IndividualCards
                            img="https://super-ficcion.com/wp-content/uploads/2021/12/DCs-Nightwing-Filmdrehbuch-ist-eine-Ur-Rache-Geschichte2webp-780x470.webp"
                            name="nightwing"
                            rol="Product owner"
                            description="My name is Bachira and I am a passionate student of Java software development. I first became interested in this language during my university studies, where I had the opportunity to take some courses in object-oriented programming and databases with Java."             
                            />
                            <IndividualCards
                            img="https://somoskudasai.com/wp-content/uploads/2022/12/portada_nier-reincarnation-11.jpg"
                            name="2b"
                            rol="Product owner"
                            description="My name is Bachira and I am a passionate student of Java software development. I first became interested in this language during my university studies, where I had the opportunity to take some courses in object-oriented programming and databases with Java."             
                            />
                        </div>
                        </div>
                    </CardsOfCodeFusion>
                </AboutCodeFusion>
            </Main>
        </>
    );
};

export default AboutUs;