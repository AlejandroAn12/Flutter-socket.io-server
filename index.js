require('dotenv').config();
const express = require('express');
const path = require('path');
//APP EXPRESS
const app = express();
const PORT = process.env.PORT || 3001;

//NODE SERVER
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

//PathPublic
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

server.listen(PORT, (err) => {

    if(err) throw new Error(err);
    console.log('Servidor corriendo en puerto', 3000);

});