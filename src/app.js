const express = require('express');
const server = express();
const port = process.env.PORT || 8080;

const start = () => console.log('Starting server...');
server.listen(port, start());

const path = require('path'); //Su objetivo es unificar las rutas

const public = path.join(__dirname, '../public');
const statics = express.static(public);
server.use(statics);

server.get('/', function(req, res) {
    let file = path.join(__dirname,'./views/home.html')
    return res.sendFile(file);
});

server.get('/register', function(req, res) {
    let file = path.join(__dirname,'./views/register.html')
    return res.sendFile(file);
});

server.get('/login', function(req, res) {
    let file = path.join(__dirname,'./views/login.html')
    return res.sendFile(file);
});