    const express = require('express');
    const http = require('http');
    const path = require('path');
    const { Server } = require('socket.io');

    const port = process.env.PORT || 4000;
    const app = express();
    const server = http.createServer(app);
    const io = new Server(server);


    app.use(express.static(path.join(__dirname, '../client')));

    io.on('connection', (socket) => {
        console.log('🔵 User has connected :', socket.id);

        let nickname = "Anonymous";

        socket.on('chat message', (msg) => {
            const fullMessage = {user: nickname, message: msg};
            console.log(`${nickname} : ${msg}`);
            io.emit('chat message', fullMessage);
        });

        socket.on('voice message', (voiceData) => {
            const voiceMessage = { user: nickname, voice: voiceData };
            console.log(`${nickname} отправил голосовое сообщение.`);
            io.emit('voice message', voiceMessage);
        });

        socket.on('set username', (username) => {
            nickname = username || "Anonymous";
            console.log('🟣 Nickname has been set :', nickname);
        });

        socket.on('disconnect', () => {
            console.log(
                '🔴 User has disconnected :',
                socket.id
            );
        });
    });

    server.listen(port, ()=>{
        console.log(`Сервер запущен на порту : ${port}`)
    });