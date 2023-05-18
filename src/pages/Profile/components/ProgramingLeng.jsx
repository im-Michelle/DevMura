import styled from "styled-components";
import { colors } from "../../../ui/colors";

const Programing = styled.div`
  color: ${colors.primaryText};
  max-width: 30px;
  padding: 0 5rem;
`;


export const ProgramingLeng = () =>{

    return(
        <Programing>
            Java
            JavaScript
            Python
        </Programing>

    );
};

