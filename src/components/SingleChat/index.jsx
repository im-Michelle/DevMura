import ChatMessageList from "./ChatMessageList";
import ChatMessageInput from "./ChatMessageInput";

const SingleChat = () => {
    const myMessageList = [
        {id: 1,message: 'Hola', self: true},
        {id: 2,message: 'Hola, ¿cómo estás?', self: false},
        {id: 3,message: 'Bien, ¿y tú?', self: true},
        {id: 4,message: 'También bien, gracias!', self: false},
        {id: 5,message: '¿Ya viste la película de Mario Bros?', self: false},
        {id: 6,message: 'Sí. ¡Está súper padre!', self: true},
    ];

    return (
        <>
            <ChatMessageList messageList={myMessageList} />
            <ChatMessageInput />
        </>
       
    );
} 
export default SingleChat;