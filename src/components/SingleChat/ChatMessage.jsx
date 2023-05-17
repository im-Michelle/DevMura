import styled, { css } from 'styled-components'

const RowChatMessage = styled.div`
    display: flex;

    ${props => props.$self && css`
        flex-direction: row-reverse;
        text-align: right;
    `}
`;
const MessageContainer = styled.div`
    flex: 2;
    background-color: aqua;
`;
const EmptyContainer = styled.div`
    flex: 1;
    background-color: chartreuse;
`;
const MessageParagraph = styled.p`
    text-align: inherit;
`;
const ChatMessage = ({ message, self }) => {
    return(
        <RowChatMessage $self={self}>
            <MessageContainer>
                <MessageParagraph>{message}</MessageParagraph>
            </MessageContainer>
            <EmptyContainer></EmptyContainer>
        </RowChatMessage> 
    );
}
export default ChatMessage;