import { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../ui/colors';
import { addFriend } from '../../../service/Posts/addFriend';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 95%;
    max-width: 800px;
    border-radius: 10px;
    box-shadow: 0 5px 8px #000000a2;
    padding-bottom: 20px;
    padding-top: 20px;
    position: relative;
`;

const AddButton = styled.button`
    border-radius: 50%;
    height: 65px;
    width: 65px;
    border: none;
    color: ${colors.primaryText};
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: ${colors.contrast};
    }
    &:active{
        scale: 0.8;
    }
    img{
        height: 35px;
        width: 35px;
        margin: auto;
    }
`


const FriendAndMessage = ({ aut, friendId, owndId, friend}) =>{

    const [friendStatus, setFriend] = useState(friend);

    const handleFriendRequest = async () =>{
        addFriend(owndId, friendId , aut)
    }

    const handleFriend = () =>{
        setFriend(!friendStatus);
        handleFriendRequest();
    }
    
    return(
        <Container>
            {   friendStatus 
                ? <AddButton onClick={handleFriend}><img src="/svg/addfriend.svg" alt="add friend" /></AddButton> 
                : <AddButton onClick={handleFriend}><img src="/svg/deletefriend.svg" alt="delete friend" /></AddButton> 
                }
            <AddButton><img src="/svg/message.svg" alt="delete button" /></AddButton> 
        </Container>
    )
}

export default FriendAndMessage;