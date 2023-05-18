import styled from 'styled-components';
import { colors } from '../../../ui/colors';

const Interests = styled.div`
  color: ${colors.primaryText};
  max-width: 30px;
  padding: 0 5rem;
`;


export const LearningInterests = () =>{
    return(
        <Interests>
            Java Mamalon
            TypeScript
        </Interests>
    )
};