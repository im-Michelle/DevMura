import styled from "styled-components";


const BubleAvatarPostContainer = styled.div`
    width: 30px;
    height: 30px;
    margin-left: -8px;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    z-index: 1;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
    &:hover{
        cursor: pointer;
        scale: 1.1;
    }
`

const BubleAvatarPost = ( id, imgsrc ) => {
    return (
        <BubleAvatarPostContainer>
            <img src={imgsrc} alt="" />
        </BubleAvatarPostContainer>
    )
}

export default BubleAvatarPost;