import { Link } from "react-router-dom";
import styled from "styled-components"
import { colors } from "../../ui/colors";

const GroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 4rem;
    width: 100%;
    background-color: ${colors.new};
    backdrop-filter: blur(5px);
    border-radius: 5px;
    justify-content: center;
    margin: .5rem 0;
`;

const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
`;

const GroupImg = styled.img`
    width: 3rem;
    height: 3rem;
    margin: 0 1rem;
`;

const GroupDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0 .2rem;
`;

const GroupName = styled(Link)`
    color: ${colors.primaryText};
    font-size: 1rem;
    margin-top: .5rem;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        color: ${colors.contrast};
    }
`;

const GroupMembers = styled.h2`
    color: ${colors.primaryText};
    font-size: .7rem;
`;

export const MiniCardGroup = ({ id, name, img, members }) => {
  return (
    <>
      <GroupContainer id={id} key={id}>
        <BodyContainer>
          <GroupImg src={img} alt={name} />
          <GroupDetails>
            <GroupName to={`/groups/${id}`}>{name}</GroupName>
            <GroupMembers>{members} members</GroupMembers>
          </GroupDetails>
        </BodyContainer>
      </GroupContainer>
    </>
  );
};