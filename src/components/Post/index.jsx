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



const Post = () => {
  return (
    <PostContainer>
      <PostEncabezado>
        <ProfileImg src="https://images.pexels.com/photos/4275717/pexels-photo-4275717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <ProfilesPost>
          <Name>Pedro Paramo</Name>
          <Role>Fullstack Developer</Role>
          <UserName>@pedro</UserName>
          <Time>hace 2 horas</Time>
        </ProfilesPost>
      </PostEncabezado>
      <PostBody>
        <BodyText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, minus perspiciatis omnis ipsum officia neque aperiam suscipit accusantium illum unde eaque iusto iste magni reiciendis expedita esse doloribus quibusdam. Minus!
        Aut, rerum. Nam iure accusamus omnis beatae consequatur dolore odio tempora, atque possimus dicta at hic soluta perspiciatis minus enim, rerum vel ipsam velit recusandae ad. Fugiat pariatur omnis temporibus.
        Aspernatur eum mol ad odio ea modi ipsa sapiente. Error saepe dolore odit incidunt porro quia cumque, consequatur in eaque deserunt quisquam soluta?
        Numquam sunt consequatur pariatur quibusdam. Incidunt at numquam ipsam cupiditate, recusandae, facere ex quo officiis amet modi porro temporibus autem ducimus assumenda aliquam vitae totam quidem quibusdam a itaque! Quae!
        </BodyText>
      </PostBody>


        
    </PostContainer>
  );
};
export default Post;
