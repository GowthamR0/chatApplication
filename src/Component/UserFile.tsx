import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); 
const UserFile = () => {
    const [username, Username] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<string[]>([]); 
    const [isDefault,setIsDefault]=useState(true)
    useEffect(() => {
        socket.on('message', (msg: string) => {
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.off('message');
        };
    }, []);

    const joinRoom = () => {
        if (room !== '' && username !== '') {
            socket.emit('joinRoom', room, username);  
        }
        setIsDefault(false)
    };

   
    const sendMessage = (event: React.FormEvent) => {
        event.preventDefault();
        if (message) {
            socket.emit('chatMessage', message,username, room); 
            setMessage(''); 
        }
    };

    return (
        <div className="chat-container">
            <h1>Chat Application</h1>

        {isDefault && <div>
            <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => Username(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter room name"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
            />
            <button onClick={joinRoom}>Join Room</button>
        </div>}

            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div key={index} className="message">{msg}</div>
                ))}
            </div>

            <form  onSubmit={sendMessage}>
                <input type="text" placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default UserFile;
