import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../ui/colors";


const Header = styled.header`
  width: 100%;
  height: 90vh;
  background-image: url(${props => props.imageUrl});
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

const TitleHead = ({titulo, imageUrl}) => {
    return(
        <Header imageUrl={imageUrl}>
            <h1> {titulo} </h1>
        </Header>
    );
};

export default TitleHead;