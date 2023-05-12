import styled from "styled-components";
import { colors } from "../../../ui/colors";

const Main = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  max-width: 700px;
  height: max-content;
  margin: 0 auto;
  background-image: url("https://images.pexels.com/photos/16144099/pexels-photo-16144099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid ${colors.secondary};
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ProfileImg = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  margin: 5px 0;
  border: 2px solid ${colors.secondary};
`;
const UserName = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${colors.primaryText};
`;
const Name = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${colors.primaryText};
`;
const LastName = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${colors.primaryText};
`;
const Names = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Header = ({ name = "no data", lastName = "no data", userName = "no data", img = "../../../../public/img/placeholder.png"}, key) => {
  return (
    <>
      <Main id={key}>
        <ProfileImg src={img} alt={name} />
        <div>
          <UserName>{userName}</UserName>
          <Names>
            <Name>{name}</Name>
            <LastName>{lastName}</LastName>
          </Names>
        </div>
      </Main>
    </>
  );
};

export default Header;
