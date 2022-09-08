
const fs =require('fs');

function RegistraHoraAcesso (req, res, next){
    
    let dataHora = new Date(); 
    
    //${data.getFullYear()}-${data.getMonth()}-${data.getDate()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}\n
    let stringDataHora= dataHora.toISOString().substring(0,19).replace('T',' ')

    fs.writeFileSync('acessos.txt', stringDataHora, {flag:'a'})

    
    next();
}

 module.exports= RegistraHoraAcesso 
// Escrever uma função middleware que registre no arquivo acessos.txt o horário
// em que cada requisição é recebida pelo servidor. Formato da hora: AAAA-MM-DD HH:mm:sss
