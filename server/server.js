const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');


const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 8080;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket) => {
  console.log('some one connect');

  socket.on('disconnec',() => {
    console.log('some one disconnect');
  })
});

server.listen(port,() => {
  console.log(`Server is up on port ${port}`);
});
