import React from 'react';
import { useState } from 'react';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';

var stompClient = null;

const ChatRoom = () => {
    const [publicChats, setPublicChats] = useState([]);
    const [privateChats, setPrivateChats] = useState(new Map());
    const [tab, setTab] = useState('CHATROOM');
    const [userData, setUserData] = useState({
        username: '',
        recievername: '',
        connected: false,
        messages: [],
    });
    const handleUserName = (e) => {
        const { value } = e.target;
        setUserData({...userData, "username" : value});
    }
    const registerUser = () => {
        let Sock=new SockJS('http://localhost:8080/ws');
        stompClient = Stomp.over(Sock);
        stompClient.connect({}, onConnected, onError);
    }
    const onConnected = () => {
        setUserData({...userData, "connected" : true});
        stompClient.subscribe('/chatroom/public', onPublicMessageReceived);
        stompClient.subscribe('/user/' + userData.username + '/private', onPrivateMessageReceived);
    }

    onPublicMessageReceived = (payload) => {
        let message = JSON.parse(payload.body);
        switch(payloadData.status){
            case 'JOIN':
                if(!privateChats.get(payloadData.senderName)){
                    privateChats.set(payloadData.senderName, []);
                    setPrivateChats(new Map(privateChats));
                }
                break;
            case 'MESSAGE':
                publicChats.push(payloadData);
                setPublicChats([...publicChats]);
                break;
        }
    }
    const onPrivateMessageReceived = (payload) => {
        let payloadData = JSON.parse(payload);
        if(privateChats.get(payloadData.senderName)){
            privateChats.get(payloadData.senderName).push(payloadData);
            setPrivateChats(new Map(privateChats));
        }else{
            let list = [];
            list.push(payloadData);
            privateChats.set(payloadData.senderName, list);
            setPrivateChats(new Map(privateChats));
        }
    }
    const onError = (error) => {
        console.log(error);
    }
    return (
        <div>
            {userData.connected ? 
                <div>
                    <div>
                        <ul>
                            <li onClick={() =>{setTab("CHATROOM")}}>Chatroom</li>
                            {[...privateChats.keys()].map((name, index) => (
                                <li key={index}>
                                    {name} 
                                </li>
                            ))}
                        </ul>
                    </div>
                    {tab === "CHATROOM" && <div>
                        {publicChats.map((name, index) => (
                                <li key={index}>
                                    {ChatRoom.senderName !== userData.username && <div >{chat.senderName}</div>} 
                                    <div>{chat.message}</div>
                                    {ChatRoom.senderName == userData.username && <div >{chat.senderName}</div>} 
                                </li>
                            ))}
                    </div>}
                    {tab !== "CHATROOM" && <div>
                        {[...privateChats.get(tab)].map((name, index) => (
                                <li key={index}>
                                    {ChatRoom.senderName !== userData.username && <div >{chat.senderName}</div>} 
                                    <div>{chat.message}</div>
                                    {ChatRoom.senderName == userData.username && <div >{chat.senderName}</div>} 
                                </li>
                            ))}
                    </div>}
                </div>
                :
                <div>
                    <input
                    id='user-name'
                    placeholder='Enter the username'
                    value={userData.username}
                    onChange={handleUserName}
                    />
                    <button type='button' onClick={registerUser}>
                        Connect
                    </button>
                </div>}

        </div>
    );
}

export default ChatRoom;