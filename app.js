// Importando o express
const express = require('express');

// Criando a aplicação express
const app = express();

// Config a aplicação express para usar o EJS
// como template engine 
app.set('view engine','ejs')

//Verificando se a requisição é para um arquivo da pasta public
app.use(express.static("public"))

//Declaração de Middlewares globais 

const RegistraHoraAcesso = require('./middlewares/RegistraHoraAcesso')
app.use(RegistraHoraAcesso)


// Importando o roteador que lida com as rotas de pizza
const PizzasRouter = require('./routes/PizzasRouter')

// Fazendo com que a aplicação utilize o roteador para todas as req que chegarem para endereços que comecem com /pizzas
app.use('/pizzas', PizzasRouter);

// Adicionando uma rota na aplicação que responde para usuário diretamente... (isso não é MVC, mas funciona)
app.get('/', (req,res) => {res.send("Olá, visitante")})

// Pondo a aplicação para rodar escutando na porta 3000
app.listen(3000, ()=>{console.log("servidor rodando na porta 3000")});

