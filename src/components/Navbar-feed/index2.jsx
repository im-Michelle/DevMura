import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { colors } from '../../ui/colors';
import Menu from './menu-feed';
import FeedRoutesComponent from './routes-feed';
import SearchBar from './search-bar';

const Nav = styled.nav`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 7vh;
  background-color: #3232323b;
  backdrop-filter: blur(5px);
  position: fixed;
  z-index: 100;
`;


const NavContainer = styled.div`
    width: 100%;
    max-width: 70%;
    height: 7vh;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;

    @media (max-width: 1170px) {
        max-width: 90%;
    }
    @media (max-width: 800px) {
        max-width: 100%;
    }
`;

const Logo = styled.div`
    width: 100%;
    max-width: 40%;
    height: 5vh;
    display: flex;
    justify-content: space-around;

    @media (max-width: 1000px) {
        justify-content: space-around;
        max-width: 40%;
    }
    @media (max-width: 768px) {
        max-width: 80%;
    }
`;

const LogoContainer = styled.div`
    width: 100%;
    max-height: 100%;
    max-width: 10%;
    display: flex;
    display-content: center;
    align-content: center;

    @media (max-width: 1000px) {
        max-width: 20%;
    }
    @media (max-width: 760px) {
        max-width: 20%;
        margin-left: 1rem;
    }
`;

const LogoImage = styled.img`
    max-width: 100%;
    max-height: 100%;
`;



const NavRoutes = styled.div`
    width: 100%;
    max-width: 55%;
    height: 5vh;
    display:flex;
    flex-direction: row;
    justify-content: space-around;

    @media (max-width: 1000px) {
        max-width: 50%;
    }
    @media (max-width: 768px) {
        max-width: 20%;
    }
`;


export const NavBarFeed = () => {

    return (
        <Nav>
            <NavContainer>
                <Logo>
                    <LogoContainer>
                        <LogoImage src="public\img\icono-dm-blanco.svg" alt="Logo" />
                    </LogoContainer>
                    <SearchBar />
                </Logo>
                <NavRoutes>
                    <FeedRoutesComponent/>
                    <Menu/>
                </NavRoutes>
            </NavContainer>
        </Nav>
    )
}
