import styled from "styled-components";
import { colors } from "../../../ui/colors";

import { user1 } from "../../../data/user";

import { IconsDic } from "../../../Utilities/IconDictionary/iconsD";

const Programing = styled.div`
  color: ${colors.primaryText};
  padding: 1rem; 
  align-items: center;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const LabelIcons = styled.div`
    position: absolute;
    top: 0;
`;
const OrderIcons = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const ImportedIcon = styled.div`
  font-size: 2rem;
  padding: 1rem;
`;

export const ProgramingLeng = () =>{

    return(
        <>
            <Programing>
                <LabelIcons>Lenguages I know</LabelIcons>
                <OrderIcons>
                    {user1.languages.map(
                        (lenguaje) => {
                            if((lenguaje) in IconsDic){
                                return(
                                    <ImportedIcon>
                                    {IconsDic[lenguaje]}
                                </ImportedIcon>)
                            }
                            else{
                                return(
                                    <ImportedIcon>
                                    {IconsDic.Default}
                                </ImportedIcon>)
                            }
                        }
                    )}
                </OrderIcons>
            </Programing>
        </>
    );
};

