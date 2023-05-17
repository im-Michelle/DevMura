import ChatMessage from "./ChatMessage";
const SingleChat = () => {
    return (
        <>
            <ChatMessage message={"Hola"} self={false}/>
            <ChatMessage message={"Hola, ¿cómo estás?"} self={true}/>
            <ChatMessage message={"Bien, ¿y tú?"} self={false}/>
            <ChatMessage message={"También bien, gracias!"} self={true}/>
        </>
    );
} 
export default SingleChat;