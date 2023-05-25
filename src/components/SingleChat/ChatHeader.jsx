import Avatar from '../avatar';
import {colors} from '../../../src/ui/colors';
import styled from 'styled-components';
import './ChatHeader.css'

const HeaderRow = styled.div`
    background-color: ${colors.greenBackground};
    display: flex;
    justify-content: space-between;
`;

const UserName = styled.p`
    background: ${colors.greenBackground};
    border: 0;
    color: white;
    flex-grow: 1;
    padding: 0 10px;
    margin: 0;
    display: flex;
    align-items: center;
    font-weight: 600;
`;

const ChatHeader = ({chatAvatarUrl}) => {
    return(
        <HeaderRow>
            <Avatar profilePic={chatAvatarUrl}/>       
            <UserName>Pepe</UserName>         
        </HeaderRow>
    )
};

export default ChatHeader


