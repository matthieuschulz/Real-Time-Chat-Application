const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000; // server will later require specific port

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', => {
    //setting up socket.io real time chat
})


app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));