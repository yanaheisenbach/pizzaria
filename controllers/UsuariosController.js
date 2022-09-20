const bcrypt =require('bcrypt')

const UsuariosController = {

    showEntrar: (req,res) => {

        let erroNoCadastro= (req.query.erroNoCadastro==1);

        res.render('entrar.ejs', {erroNoCadastro});
    },

    add: (req,res)=> {
        // Extraindo informações do req.body 
        let {email, nome, senha, confirmacao, endereco}=req.body; 
        // Verificar se a senha e confirmação estão Ok
        if(senha != confirmacao){
           return res.redirect('/usuarios/entrar?erro no cadastro=1');
        }
        // Criar um obj com as informações do usuário 
        let usuario = {
            email,
            senha: bcrypt.hashSync(senha,10),
            enderecos:[endereco]
        }
        //Salvar o usuário no arquivo.json 
        const fs =require('fs');
        const path=require('path');
        const usuarios = require('../database/usuarios.json');
        usuarios.push(usuario);
        fs.writeFileSync(
            path.join(__dirname, '../database/usuarios.json'),
            JSON.stringify(usuarios, null, 4)
        )
        //Criar uma session com as informações NÃO SENSÍVEIS do usuário
        delete usuario.senha // Removendo senha do usuário antes de salvar na session 
        req.session.usuario= usuario;
        //Redirecionar o usuário...
        if(req.session.pizzas != undefined){
            //Caso tenha carrinho  -> /pizzas/cart
           return res.redirect('/pizzas/cart')  

        } else {
            //Caso contrário -> /pizzas
             return res.redirect('/pizzas') 

        }

        res.send(usuario)
    }

}

module.exports = UsuariosController