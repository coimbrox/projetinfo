const express = require('express');
const router = express.Router();



//Retorna todos os produtos
router.get('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Retorna todos os logins'
  });
});

//insere os produtos
router.post('/', (req, res, next) => {

  const logado = {
    id_login: req.body.id_login,
    senha: req.body.senha
  };

  res.status(201).send({
    mensagem: 'Login Criado',
    loginCriado: logado
  })
});

//retorna os dados 
//numa api real isso seria aonde consultariamos o backend e passariamos outras informações
router.get('/:id_login', (req, res, next) => {
  const id = req.params.id_login

  if (id === 'especial') {
    res.status(200).send({
      mensagem: 'Você foi Premiado',
      id: id
    });
  } else {
    res.status(200).send({
      mensagem: 'Login Efetuado'
    });
  }
})

//Altera um pedido
router.patch('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Altera o Login'
  })
});

//exclui um produto
router.delete('/', (req, res, next) => {
  res.status(201).send({
    mensagem: 'Deleta o Login'
  })
});

module.exports = router;