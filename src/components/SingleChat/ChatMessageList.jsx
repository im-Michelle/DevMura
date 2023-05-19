import ChatMessage from "./ChatMessage";
import styled from 'styled-components'
import {colors} from '../../../src/ui/colors'

const ChatBackground = styled.div`
    background-color: ${colors.originalBackground}
`;

const ChatMessageList = ({ messageList }) => {
    const messagesToRender = messageList.map(item => {
        return <ChatMessage key={item.id} message={item.message} self={item.self}/>
    });
    console.log(messagesToRender)
    return(
        <ChatBackground>
            {messagesToRender}
        </ChatBackground>            
    );
}

export default ChatMessageList;