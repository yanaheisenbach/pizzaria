const UsuariosController = require('../controllers/UsuariosController');

//Criando roteador 
const UsuariosRouter = require('express').Router();

//Criando rotas...

UsuariosRouter.get('/entrar', UsuariosController.showEntrar);
UsuariosRouter.post('/add', UsuariosController.add)
//Exportando modulo criado 
module.exports= UsuariosRouter