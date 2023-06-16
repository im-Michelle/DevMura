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

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ProfileImg = styled.img`
  width: 95px;
  height: 95px;
  object-fit: cover;
  border-radius: 50%;
  margin: 5px 0;
`;
const UserName = styled.h2`
  font-size: 1.7rem;
  font-weight: 500;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #262a263b;
  backdrop-filter: blur(10px);
`;
const Name = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
  color: white;
`;
const LastName = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
  color: white;
`;
const Names = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  justify-content: center;
  background-color: #262a263b;
  backdrop-filter: blur(10px);
`;

const Header = ({ name, lastName , userName, img, backGroundIMG}, key) => {
  const mainStyle = {
    backgroundImage: backGroundIMG ? `url(${backGroundIMG})` : `url(${"https://images.pexels.com/photos/2387819/pexels-photo-2387819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
  }

  return (
    <>
      <Main style={mainStyle}>
        <ProfileImg src={ img ? img : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"  } alt={name} />
        <div>
          <UserName>@{userName}</UserName>
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

Header.defaultProps = {
  name: "no data",
  lastName: "no data",
  userName: "no data",
  img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
};

