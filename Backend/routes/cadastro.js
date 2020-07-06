const express = require('express');
const router = express.Router();



//Retorna todos os Cadastros
router.get('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Retorna Os Cadastros'
  });
});

//insere o Cadastro
router.post('/', (req, res, next) => {

  const cadastra = {
    name: req.body.nome,
    email: req.body.email,
    senha: req.body.senha
  };

  res.status(201).send({
    mensagem: 'O Cadastro Foi Criado',
    cadastroCriado: cadastra
  })
});

//retorna os dados 
//numa api real isso seria aonde consultariamos o backend e passariamos outras informações
router.get('/:id_cadastro', (req, res, next) => {
  const id = req.params.id_cadastro
  res.status(200).send({
    mensagem: 'Detalhes do Cadastro',
    id_cadastro: id
  });
});

//altera os Cadastros
router.patch('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Altera o Cadastro'
  })
});

// deleta os Cadastros
router.delete('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Pedido Excluido'
  })
});

module.exports = router;