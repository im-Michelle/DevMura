import styled from "styled-components";
import { colors } from "../../../ui/colors";

import { user1 } from "../../../data/user";

const PersonalInfo = styled.div`
  color: ${colors.primaryText};
`;

export const PersonalDescription = () => {
    return(
    <PersonalInfo>
        {user1.description}
    </PersonalInfo>
    );
};