import styled, { css } from 'styled-components'
import {colors} from '../../../src/ui/colors'
import Avatar from '../avatar';

const RowChatMessage = styled.div`
    display: flex;

    ${props => props.$self && css`
        flex-direction: row-reverse;
        text-align: right;
    `}
`;
const MessageContainer = styled.div`
    flex: 2;
    background-color: ${colors.grayBackground};
    color: ${colors.lightGray};
    border-radius: 25px;
    margin: 10px;
    padding: 10px;

    ${props => props.$self && css`
        background-color: ${colors.blueBackground};
        color: ${colors.white}
    `}
`;
const EmptyContainer = styled.div`
    flex: 1;
`;
const MessageParagraph = styled.p`
    text-align: inherit;
    margin: 0;
`;
const ChatMessage = ({ message, self, avatarUrl }) => {
    return(
        <RowChatMessage $self={self}>
           {self ? null : <Avatar profilePic={avatarUrl}></Avatar>}
            <MessageContainer $self={self}>
                <MessageParagraph>{message}</MessageParagraph>
            </MessageContainer>
            <EmptyContainer></EmptyContainer>
        </RowChatMessage> 
    );
}
export default ChatMessage;