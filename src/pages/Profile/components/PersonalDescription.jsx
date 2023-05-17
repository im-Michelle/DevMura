import styled from "styled-components";
import { colors } from "../../../ui/colors";

const PersonalInfo = styled.div`
  color: ${colors.primaryText};
`;

export const PersonalDescription = () => {
    return(
    <PersonalInfo>
        Aqui se supone que debe llegar la informacion de la persona, informacion como: Nombre, Edad, País de Residencia, O tal vez una breve explicacion provista por la persona
    </PersonalInfo>
    );
};