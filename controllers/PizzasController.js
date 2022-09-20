// Importando o array de pizzas
const pizzas = require('../database/pizzas.json');

// Criando e exportando o objeto literal que conterá todas as funções (controllers)
module.exports = {

    index: (req, res) => {

        //
        let quantidade=0;
        if(req.session.pizzas){
            quantidade= req.session.pizzas.length;
        }

        res.render('index.ejs', {pizzas, quantidade});
    },

    show: (req,res) => {
        let id = req.params.id 
        let pizza = pizzas.find(p => p.id ==id)
        res.render('show.ejs', {pizza})
    },

    search: (req,res) => {
        
        let quantidade=0;
        if(req.session.pizzas){
            quantidade= req.session.pizzas.length;
        }


        let search = req.query.q
        let pizzasSearch= pizzas.filter(p => p.nome.includes(search))   
        res.render('index.ejs', {pizzas: pizzasSearch, quantidade} )
    },

    addCart : (req, res) => {
       // res.send('add pizzas aqui'+ req.body.aEscolhida)
       if(req.session.pizzas){
            req.session.pizzas.push(req.body.aEscolhida);
       } else {
        req.session.pizzas = [req.body.aEscolhida]
       }

       res.redirect('/pizzas')
       console.log(req.session)
       
    },

    showCart: (req,res) => {
        // Levantar do array de pizzas as pizzas que estão na session;
        
        let idsNoCarrinho = req.session.pizzas;
        
        let getPizzaById = (id) => {
            return pizzas.find(p => p.id == id)
        }

        let pizzasNoCarrinho = idsNoCarrinho.map(getPizzaById)

        // Levantar se o usuário está logado
        let usuarioLogado= (req.session.usuario !== undefined)
        
        // Renderizar pizzas.ejs, passando as pizzas que estão no carrinho, e não os ids;
       // res.send(pizzasNoCarrinho)
        res.render('cart.ejs', {pizzasNoCarrinho, usuarioLogado})
    }

} 