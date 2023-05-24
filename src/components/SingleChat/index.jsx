import ChatHeader from "./chatHeader";
import ChatMessageList from "./ChatMessageList";
import ChatMessageInput from "./ChatMessageInput";

const SingleChat = () => {      
    const myChatAvatarUrl = 'https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture.jpg';
    const myMessageList = [
        {id: 1,message: 'Hola', self: true},
        {id: 2,message: 'Hola, ¿cómo estás?', self: false, avatarUrl: myChatAvatarUrl},
        {id: 3,message: 'Bien, ¿y tú?', self: true},
        {id: 4,message: 'También bien, gracias!', self: false,avatarUrl: myChatAvatarUrl},
        {id: 5,message: '¿Ya viste la película de Mario Bros?', self: false, avatarUrl: myChatAvatarUrl},
        {id: 6,message: 'Sí. ¡Está súper padre!', self: true},
    ];

    return (
        <>
            <ChatHeader chatAvatarUrl={myChatAvatarUrl}/>
            <ChatMessageList messageList={myMessageList}/>
            <ChatMessageInput />
        </>
       
    );
} 
export default SingleChat;