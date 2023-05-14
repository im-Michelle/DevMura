import React from 'react';
import styled, { keyframes } from 'styled-components';

const growAnimation = keyframes`
  from {
    width: 50%;
  }
  to {
    width: 100%;
    font-size: 20px;
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  max-width: 90%;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left: 1rem; 

@media (max-width: 500px) {
    max-width: 70%;
}
`;

const SearchImage = styled.img`
  max-width: 10%;
  height: 60%;

  @media (max-width: 1000px) {
    max-width: 100%;
    height: 70%;
  }
  @media (max-width: 390px) {
    max-width: 20%;
  }
`;

const SearchInput = styled.input`
  width: 50%;
  height: 80%;
  max-height: 100%;
  padding-left: 1rem;
  border: none;
  background-color: #3232323b;
  backdrop-filter: blur(5px);
  transition: width 0.3s ease, font-size 0.3s ease;

  @media (max-width: 500px) {
    max-width: 80%;
    width: 100%;
  }

  &:focus {
    animation: ${growAnimation} 0.3s ease;
    animation-fill-mode: forwards;
  }
`;

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Search" />
    </SearchContainer>
  );
};

export default SearchBar;
