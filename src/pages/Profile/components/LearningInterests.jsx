import styled from 'styled-components';
import { colors } from '../../../ui/colors';
import { IconsDic } from '../../../Utilities/IconDictionary/iconsD';

const Interests = styled.div`
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

// TODO hacer una funcion que los meta de uno en uno para que no se junten
export const LearningInterests = () =>{
    return(
        <Interests>
          <ImporedIcon>
            {IconsDic.html}
          </ImporedIcon>
          <ImporedIcon>
            {IconsDic.php}
          </ImporedIcon>
            
        </Interests>
    )
};