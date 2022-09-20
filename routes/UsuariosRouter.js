const UsuariosController = require('../controllers/UsuariosController');

//Criando roteador 
const UsuariosRouter = require('express').Router();

//Criando rotas...

UsuariosRouter.get('/entrar', UsuariosController.showEntrar);

//Exportando modulo criado 
module.exports= UsuariosRouter