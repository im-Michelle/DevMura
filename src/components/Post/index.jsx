import styled from "styled-components";
import { colors } from "../../ui/colors";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.primaryText};
  width: 90%;
  border-radius: 10px;
  box-shadow: 0 5px 8px #00000082;
`;
const PostEncabezado = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`
const ProfileImg = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: 10px;
`
const ProfilesPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin-right: 10px;
    margin-left: 10px;
`
const Name = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
`
const Role = styled.h2`
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
`
const UserName = styled.h3`
    font-size: 0.8rem;
    font-weight: 400;
    margin: 0;
    color: ${colors.secondaryText};
`
const Time = styled.h4`
    font-size: 0.8rem;
    font-weight: 400;
    margin: 0;
    color: ${colors.secondaryText};
`
const PostBody = styled.div`
    display: flex;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin-top: 10px;
    margin-right: 10px;
    margin-left: 10px;
`
const BodyText = styled.p`
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    color: ${colors.secondaryText};
    
`



const Post = ( {key, name, role, userName, time, img, bodyText} ) => {
  return (
    <PostContainer>
      <PostEncabezado>
        <ProfileImg src={img} alt={name} />
        <ProfilesPost>
          <Name>{name}</Name>
          <Role>{role}</Role>
          <UserName>{userName}</UserName>
          <Time>{time}</Time>
        </ProfilesPost>
      </PostEncabezado>
      <PostBody>
        <BodyText>{bodyText}</BodyText>
      </PostBody>


        
    </PostContainer>
  );
};
export default Post;
