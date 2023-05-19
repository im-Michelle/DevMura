import styled from "styled-components";
import { colors } from "../../../ui/colors";

import { IconsDic } from "../../../Utilities/IconDictionary/iconsD";

const Programing = styled.div`
  color: ${colors.primaryText};
  padding: 3rem; 
  align-items: center;
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;
const ImporedIcon = styled.div`
  font-size: 2rem;
  padding: 1rem;
`;



export const ProgramingLeng = () =>{

    return(
        <>
            <Programing>
                <ImporedIcon>
                    {IconsDic.java}
                </ImporedIcon>
                <ImporedIcon>
                    {IconsDic.javaScript}
                </ImporedIcon>
                <ImporedIcon>
                    {IconsDic.python}
                </ImporedIcon>
            </Programing>
        
        </>

    );
};

