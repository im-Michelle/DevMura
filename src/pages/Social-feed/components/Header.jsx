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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid ${colors.secondary};
  border-radius: 10px;
  margin-bottom: 20px;
  min-width: 300px;
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
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #262a263b;
  backdrop-filter: blur(10px);
`;
const Name = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
`;
const LastName = styled.h2`
  font-size: 1.2rem;
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
    backgroundImage: backGroundIMG ? `url(${backGroundIMG})` : `url(${"https://images.pexels.com/photos/15536927/pexels-photo-15536927/free-photo-of-ciudad-coches-punto-de-referencia-calle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
  }

  return (
    <>
      <Main style={mainStyle}>
        <ProfileImg src={ img ? img : ""  } alt={name} />
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

