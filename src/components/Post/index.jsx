import styled from "styled-components";
import { colors } from "../../ui/colors";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';

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
const Name = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`;
const Role = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;
const UserName = styled.h3`
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0;
  color: ${colors.secondaryText};
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

const Post = ({ key, name, role, userName, time, img, bodyText, postImg }) => {

  const [like, setLike] = useState(false);

  const [bookmark, setBookmark] = useState(false);


  
  return (
    <PostContainer id={key}>
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
        <PostImg src={postImg} alt="" />
      </PostBody>

      <PostFooter>
        <IconosLike>
          { like ? <FavoriteIcon  fontSize="large" style={{color: `${colors.contrast}`}}  onClick={() => setLike(!like)} /> : <FavoriteBorderIcon fontSize="large"  onClick={() => setLike(!like)} />}
          {/* <FavoriteBorderIcon fontSize="large"  /> */}
             
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
