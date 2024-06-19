// Create web server
const express = require('express');
const app = express();
// Create a server with Express
const server = require('http').createServer(app);
// Create socket.io server
const io = require('socket.io')(server);

// When a user connects to the server
io.on('connection', socket => {
  console.log('New user connected');
  // When a user disconnects from the server
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
  // When a user sends a message
  socket.on('message', message => {
    console.log('New message:', message);
    // Send the message to all connected users
    io.emit('message', message);
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});