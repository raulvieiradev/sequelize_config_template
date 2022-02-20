const express = require('express');
const routes = require('./routes/index.routes');

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3333, () => console.log("Server rodando na porta 3333"));