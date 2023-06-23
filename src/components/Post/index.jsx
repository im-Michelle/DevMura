import styled from "styled-components";
import { colors } from "../../ui/colors";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { heartPost } from "../../service/Posts/heartPost";
import BubleAvatarPost from "../BubleAvatarPost";
import { useEffect } from "react";
import ModalComments from "./ModalComments";
import { getComments } from "../../service/Gets/commentsService";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.primaryText};
  width: 98%;
  border-radius: 10px;
  box-shadow: 0 5px 8px #00000082;
  margin: 0 auto;
  margin-bottom: 25px;
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
  width: 100%;
  flex-direction: column;
  align-items: center;
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
  width: 95%;
  word-wrap: break-word;
`;
const PostImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  //border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const PostFooter = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const IconosLike = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  /* width: 50%; */
`;
const LikeCounter = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  margin: 0;
  color: ${colors.primaryText};
`;
const SaveAndBubble = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: not-allowed;
`;
const BubleAvatarPostContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const Post = ({ id ,firstName, lastName, role, userName, time, img, bodyText, postImg, userId, likes, hearts, ownId, aut, ownPhoto, ownName, ownLastName}) => {

  const likesToNumber = parseInt(likes)

  const [like, setLike] = useState(  );

  const [bookmark, setBookmark] = useState(false);

  const [likeCounter, setLikeCounter] = useState( likesToNumber );

  const [showModal, setShowModal] = useState(false);

  const [comments, setComments] = useState([]);

  const formatdTime = moment(time).startOf('hour').fromNow();

  const fullName = `${firstName} ${lastName}`

  useEffect(() => {
    hearts.forEach((post) => {
      if(post.userId === ownId && post.status === 1 ){
        setLike(true)
      }else{
        setLike(false)
      }
    })
  }, [])

  const handleModal = async () =>{
    try{
      const comentarios = await getComments(aut, id)
      setComments(comentarios)
      setShowModal(!showModal)
    }catch(error){
      console.log(error)
    }
  }

  const handleLike = async () =>{
    const megusta = await heartPost( ownId, id , aut)
    //console.log(megusta)
    megusta == 1 ? setLike(true) : setLike(false)
    megusta == 1 ? setLikeCounter(likeCounter + 1) : setLikeCounter(likeCounter - 1)
  }

  const imgArray = []

  /* if(hearts.length > 0){
    hearts.forEach((user) =>{
      let imgsrc = user.userImg;
      imgArray.push(imgsrc)
    })
  } */
  
  return (
    <PostContainer>
      <PostEncabezado>
        <ProfileImg src={img ? img : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt={fullName} />
        <ProfilesPost>
          <Name to={`/user/${userId}`} >{fullName}</Name>
          <UserName>@{userName}</UserName>
          <Role>{role}</Role>
          <Time>{formatdTime}</Time>
        </ProfilesPost>
      </PostEncabezado>
      <PostBody>
        <BodyText>{bodyText}</BodyText>
        <PostImg src={postImg} alt="" />
      </PostBody>
      
      <PostFooter>
        <IconosLike>
          { likesToNumber != 0 ? <LikeCounter>Likes {likeCounter}</LikeCounter> : <></>}
          { like ? <FavoriteIcon  fontSize="large" style={{color: `${colors.contrast} `}}  onClick={() => handleLike()} /> : <FavoriteBorderIcon fontSize="large"  onClick={() => handleLike()} />}     
          {<ChatBubbleIcon onClick={ () => handleModal() } fontSize="large"/>}
        </IconosLike>
        <SaveAndBubble>
        {bookmark ? <BookmarkIcon fontSize="large" onClick={() => setBookmark(!bookmark)} /> : <BookmarkBorderIcon fontSize="large" onClick={() => setBookmark(!bookmark)} />}
          {/* <BubleAvatarPostContainer>
            {
              imgArray.map((img) => {
                return <BubleAvatarPost imgsrc={img}  />
              })
            }
          </BubleAvatarPostContainer> */}
        </SaveAndBubble>
      </PostFooter>
        {showModal ? <ModalComments comments={comments} aut={aut} ownPhoto={ownPhoto} userName={userName} ownName={ownName}  id={id} setShowModal={setShowModal} ownId={ownId}/> : <></>}
    </PostContainer>
  );
};
export default Post;

Post.defaultProps = {
  name: "No name",
  userName: "No userName to show",
  time: "time",
  img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
  bodyText: "No text to show",
  role: "No role to show",
  liked: false,
};

