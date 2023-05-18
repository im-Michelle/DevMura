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
                <TitleHead titulo="Privacy Policy" imageUrl="./img/background-Privacy.jpg"/>
                <Footer />
            </Main>
        </>
    );
};

export default Privacy;