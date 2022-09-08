function PontuaPizza(req, res, next) {
    // Capturar o id da pizza requerida

    let id=req.params.id
    // Levantar a pontuação da pizza requerida de um arquivo
        // - Importar as pizzas
        const pizzas=require('../database/pizzas.json')

        // - Localizar a pizza de id
        let pizza = pizzas.find(p => p.id == id)

        // Verificando a existência da pizza 
        if(!pizza){
            return res.send('Pizza não encontrada')
        }
        // - Pegar a pontuação dela e aumentar 
        if(pizza.score==undefined){
            pizza.score= 1;
        } else {
            pizza.score++;
        }

    // Salvar a nova pontuação no arquivo
    const fs =require('fs');
    const path = require('path');
    let caminhoDoArquivo= path.resolve('./database/pizzas.json')
    
    fs.writeFileSync(caminhoDoArquivo, JSON.stringify(pizzas, null, 4));    
    // Passar a bola para o próximo middleware
        next();

}

module.exports = PontuaPizza; 
