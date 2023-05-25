import styled from "styled-components";
import { colors } from "../../ui/colors";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

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
`;
const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
  margin-left: 10px;
`;
const ProfilesPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-right: 10px;
  margin-left: 10px;
`;
const Name = styled(Link)`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
  color: ${colors.primaryText};
  text-decoration: none;
  transition: 0.1s ease-in-out;
  &:hover {
    color: ${colors.secondaryText};
  }
`;
const Role = styled.h2`
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0;
  color: ${colors.secondaryText};
`;
  
const UserName = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
`;
const Time = styled.h4`
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0;
  color: ${colors.secondaryText};
`;
const PostBody = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
`;
const BodyText = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
  color: ${colors.primaryText};
  text-align: left;
  width: 100%;
`;
const PostImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const PostFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const IconosLike = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 50%;
`;

const Post = ({ id, name, role, userName, time, img, bodyText, postImg }) => {

  const [like, setLike] = useState(false);

  const [bookmark, setBookmark] = useState(false);

  return (
    <PostContainer id={id} key={id}>
      <PostEncabezado>
        <ProfileImg src={img ? img : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}   alt={name} />
        <ProfilesPost>
          <Name to={`/user/${id}`} >{name}</Name>
          <UserName>{userName}</UserName>
          <Role>{role}</Role>
          <Time>{time}</Time>
        </ProfilesPost>
      </PostEncabezado>
      <PostBody>
        <BodyText>{bodyText}</BodyText>
        <PostImg src={postImg} alt="" />
      </PostBody>

      <PostFooter>
        <IconosLike>
          { like ? <FavoriteIcon  fontSize="large" style={{color: `${colors.contrast} `}}  onClick={() => setLike(!like)} /> : <FavoriteBorderIcon fontSize="large"  onClick={() => setLike(!like)} />}     
          <ChatBubbleIcon fontSize="large"/>
        </IconosLike>
        <div>
        {bookmark ? <BookmarkIcon fontSize="large" onClick={() => setBookmark(!bookmark)} /> : <BookmarkBorderIcon fontSize="large" onClick={() => setBookmark(!bookmark)} />}
        </div>
      </PostFooter>
    </PostContainer>
  );
};
export default Post;
