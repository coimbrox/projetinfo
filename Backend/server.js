const http = require('http'); //criar serviço http
const app = require('./app');  //pega o app 
const port = process.env.PORT || 3000; // define porta padrão 
const server = http.createServer(app);   //cria nosso server passando o app dentro do server e escutando 
server.listen(port);

