import styled from "styled-components";
import { colors } from "../../../ui/colors";



const PersonalInfo = styled.div`
  color: ${colors.primaryText};
`;

export const PersonalDescription = ({description}) => {
    return(
    <PersonalInfo>
        {description}
    </PersonalInfo>
    );
};