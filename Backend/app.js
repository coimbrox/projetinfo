const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


const rotaLogin = require('./routes/login');
const rotaCadastro = require('./routes/cadastro');

app.use(morgan('dev')); //monitora a exec e da um log 
app.use(bodyParser.urlencoded({ extended: false })); //aceitar ddados simples
app.use(bodyParser.json()); // json na entrada do body


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Header',
    'Content-Type',
    'Origin, X-Requrested-With, Content-Type, Accept, Authorization',
  );

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GETS');
    return res.status(200).send({});
  }

  next();

});



app.use('/cadastro', rotaCadastro);
app.use('/login', rotaLogin);

//quando não encontrar rota
app.use((req, res, next) => {
  const erro = new Error('Não Encontrado');
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.message
    }
  })
});


module.exports = app; //exportar os dados do app 