import styled from "styled-components"
import { GroupBody } from "../../components/GroupId";
import { NewNavBarFeed } from "../../components/Navbar-feed"
import { groups } from "../../data/groups";
import { colors } from "../../ui/colors";

const GroupMain = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.new};
    align-items: center;
    width: 100%;
    padding-top: 10vh;
    min-height: 100vh;
`;


export const GroupPage = () => {
  const group = groups.find((group) => group.key === 1);

  return (
    <>
      <NewNavBarFeed />
      <GroupMain>
        {group && (
          <GroupBody
            key={group.key}
            id={group.key}
            name={group.name}
            members={group.members}
            back_img={group.back_img}
          />
        )}
      </GroupMain>
    </>
  );
};