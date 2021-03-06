const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000; // server will later require specific port

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket)=> {    //setting up socket.io real time chat
    console.log('We have a new connection!');

    socket.on('join', ({name, room}) =>{
        console.log(name, room);

        const error = true;

        if(error){
            callback({error: 'error'});
        }


        



        callback(); // error handling
    })
    socket.on('disconnect', () => {
        console.log('User has left!');
    })
 
})

 



app.use(router);


server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
