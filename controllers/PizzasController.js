// Importando o array de pizzas
const pizzas = require('../database/pizzas.json');

// Criando e exportando o objeto literal que conterá todas as funções (controllers)
module.exports = {

    index: (req, res) => {
        res.render('index.ejs', {pizzas});
    },

    show: (req,res) => {
        let id = req.params.id 
        let pizza = pizzas.find(p => p.id ==id)
        res.render('show.ejs', {pizza})
    },

    search: (req,res) => {
        
        let search = req.query.q
        let pizzasSearch= pizzas.filter(p => p.nome.includes(search))   
        res.render('index.ejs', {pizzas: pizzasSearch} )
    }

} 