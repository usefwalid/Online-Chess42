const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

// Create an Express application
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: ['GET', 'POST']
  }
});


io.on('connection', (socket) => {
  
    socket.on('join', (room) => {
        socket.join(room);
        console.log('A user joined room:', room);
        //send msg to all clients in room with room size
        io.to(room).emit('roomSize', io.sockets.adapter.rooms.get(room).size);
    });

    socket.on('switchTurn', (room,MoveToSend) => {
        MoveToSend.piece.enemy = !MoveToSend.piece.enemy
        MoveToSend.piece.position_x = 7 - MoveToSend.piece.position_x
        MoveToSend.piece.position_y = 7 - MoveToSend.piece.position_y
        MoveToSend.piece.id = 33 - MoveToSend.piece.id
        MoveToSend.x = 7 - MoveToSend.x
        MoveToSend.y = 7 - MoveToSend.y
        if(MoveToSend.piece.enemy){
            if(MoveToSend.piece.symbol==='♙'){
                MoveToSend.piece.symbol='♟'
            }
            if(MoveToSend.piece.symbol==='♖'){
                MoveToSend.piece.symbol='♜'
            }
            if(MoveToSend.piece.symbol==='♘'){
                MoveToSend.piece.symbol='♞'
            }
            if(MoveToSend.piece.symbol==='♗'){
                MoveToSend.piece.symbol='♝'
            }
            if(MoveToSend.piece.symbol==='♕'){
                MoveToSend.piece.symbol='♛'
            }
            if(MoveToSend.piece.symbol==='♔'){
                MoveToSend.piece.symbol='♚'
            }
        }
        
        
        
        socket.to(room).emit('switchTurn',MoveToSend);
    });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
