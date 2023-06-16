import styled from "styled-components";
import { colors } from "../../../ui/colors";
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from "react";
import { Link } from "react-router-dom";


const ModalContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    max-height: 300px;
    overflow-y: scroll;
    overflow-x: hidden;
`
const Comment = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    transition: 0.1s ease-in-out;
    cursor: pointer;
    &:hover{
        background-color: #0000004a;
    }
`
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 2px;
    margin-right: 2px;
`
const UserAndComent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;
    width: 100%;
`
const UserName = styled(Link)`
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0;
    color: ${colors.primaryText};
    text-decoration: none;
    transition: 0.1s ease-in-out;
    :hover{
        color: ${colors.secondaryText};
    }
`
const CommentText = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0;
    color: ${colors.secondaryText};
    text-align: left;
    width: 100%;
    word-wrap: break-word;
`

const WriteComment = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 15px;
    padding-top: 15px;
    gap: 10px;
    margin: 0 auto;
`
const StyledSendIcon = styled(SendIcon)`
    color: ${colors.primaryText};
    cursor: pointer;
`
const StyledInput = styled(TextField)`
    input{
        color: ${colors.primaryText};
    }
    label{
        color: ${colors.primaryText};
    }
    width: 100%;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${colors.primaryText};   
    .MuiInput-underline:before{
        border-bottom: 1px solid ${colors.secondaryText};
    }
    .MuiInput-underline:hover:not(.Mui-disabled):before{
        border-bottom: 1px solid ${colors.primaryText};
    }
    .MuiInput-underline:after{
        border-bottom: 1px solid ${colors.primaryText};
    }
`

const ModalComments = (props) =>{

    const { id, ownPhoto, ownName,  comments = []} = props;

    const [comment, setComment] = useState("");

    const handleCommentChange = async (e) =>{
        setComment(e.target.value);
    }

    return (
        <ModalContainer>
            {comments ? comments.map((comment) => {
                return (
                    <Comment>
                        <Avatar src={comment.img ? comment.img : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt="" />
                        <UserAndComent>
                            <UserName to={`/user/${id}`}>@{comment.username}</UserName>
                            <CommentText>{comment.content}</CommentText>
                        </UserAndComent>
                    </Comment>
                )
            } ) : <>No comments</>}
            <WriteComment>
                <Avatar src={ownPhoto ? ownPhoto : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt="" />
                <UserAndComent>
                    {/* <UserName>{ownName} {ownLastName}</UserName> */}
                    <StyledInput 
                        id="standard-basic" 
                        label={`Add a comment as ${ownName}`}
                        variant="standard"
                        value={comment}
                        onChange={handleCommentChange}
                        endadornment={
                            <InputAdornment position="end">
                                <StyledSendIcon  />
                            </InputAdornment>
                        }
                    />
                </UserAndComent>
            </WriteComment>
        </ModalContainer>
    )
}

export default ModalComments;

ModalComments.defaultProps = {
    ownName: "No name",
    ownLastName: "No name",
}