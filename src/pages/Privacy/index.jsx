import React from "react";
import styled from "@emotion/styled";
import Footer from "../../components/Footer";
import NavbarDefault from "../../components/Navbar-Default";
import TitleHead from "../../components/TitleHead";

const Main = styled.main`
  width: 100%;
`;

const Privacy = () => {
    return(
        <>
            <NavbarDefault />
            <Main>
                <TitleHead titulo="Privacy Policy" imageUrl="https://images.pexels.com/photos/8720593/pexels-photo-8720593.jpeg"/>
                <Footer />
            </Main>
        </>
    );
};

export default Privacy;