import styled from 'styled-components';
import { colors } from '../../../ui/colors';
import { IconsDic } from '../../../Utilities/IconDictionary/iconsD';


import { user } from '../../../data/user';

const Interests = styled.div`
  color: ${colors.primaryText};
  padding: 3rem;
  align-items: center;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  text-align: center;
  position: relative;
`;

const LabelIcons = styled.div`
  position: absolute;
  top: 50px;
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

// TODO hacer una funcion que los meta de uno en uno para que no se junten
export const LearningInterests = () =>{
    return(
        <Interests>
          <LabelIcons>Lenguages of interest</LabelIcons>
          <OrderIcons>
            {user.learnignLanguages.map(
                      (lenguaje) => {
                          return(
                          <ImportedIcon>
                              {IconsDic[lenguaje]}
                          </ImportedIcon>)
                      }
            )}  
          </OrderIcons>
        </Interests>
    )
};