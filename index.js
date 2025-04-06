const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173', 
        methods: ['GET', 'POST'],
    }
});


io.on('connection', (socket) => {
    console.log(`a user connected,${socket.id}`);
    
    socket.on('joinRoom', (room,username) => {
        console.log(username);
        socket.join(room,username);
        console.log(`User joined room: ${room,username}`);
    });
    
    socket.on('chatMessage', (msg,username, room) => {
        var userMessage=`${msg}--!!${username}!!`
        io.to(room).emit('message', userMessage); 
    });
    
    
});

server.listen(3001, () => {
    console.log('Server running on port 3001');
});
