import styled from "styled-components";
import { colors } from "../../ui/colors";
import SubjectIcon from '@mui/icons-material/Subject';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import GroupsIcon from '@mui/icons-material/Groups';
import { useState } from 'react';


const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  width: 100%;
  min-height: 100vh;
`;

const GroupHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  backdrop-filter: blur(5px);
  height: 230px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
`;

const BackgroundGroup = styled.img`
  display: flex;
  width: 100%;
  max-height: 50%;
  height: 100%;
`;

const MenuHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  max-height: 20%;
  height: 100%;
  width: 100%;
  padding: 0 10px;


`;

const MenuDropdown = styled.div`
    position: relative;
    display: flex;
    padding: 6px;
    color: ${colors.primaryText};
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 50%;

    :hover {
        cursor: pointer;
        border-radius: 50%;
        background-color: ${colors.background};
        padding: 6px;
    }
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${colors.new};
  min-width: 160px;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

const DropdownItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 8px;
    width: 11rem;
    height: 2rem;
    cursor: pointer;
    border-radius: 5px;

  &:hover {
    background-color: ${colors.background};
  }
`;

const GroupDetailsHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    background-color: ${colors.new};
    max-height: 30%;
    height: 100%;
    align-items: start;
    padding-left: 1rem;
`;

const GroupName = styled.h1`
    font-size: 2rem;
    color: ${colors.primaryText};
`;

const GroupMembers = styled.p`
    font-size: .8rem;
    color: ${colors.primaryText};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-top: -.7rem;
    svg {
        margin-right: .5rem;
    }
`;


export const GroupBody = ({id,back_img,name, members}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <GroupContainer id={id} key={id}>
        <GroupHeader>
          <BackgroundGroup src={back_img} alt={name}/>
          <MenuHeader>
            <MenuDropdown>
              <SubjectIcon onClick={toggleDropdown} />
              {showDropdown && (
                <DropdownContent>
                  <DropdownItem><ExitToAppIcon/>Leave this group</DropdownItem>
                  <DropdownItem><ReportGmailerrorredIcon/>Report this group</DropdownItem>
                </DropdownContent>
              )}
            </MenuDropdown>
          </MenuHeader>
          <GroupDetailsHeader>
            <GroupName>{name}</GroupName>
            <GroupMembers><GroupsIcon/>{members} members</GroupMembers>
          </GroupDetailsHeader>
        </GroupHeader>
      </GroupContainer>
    </>
  );
};
