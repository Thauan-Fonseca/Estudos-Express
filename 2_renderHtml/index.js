const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const basePath = path.join(__dirname, "templates");

const chekAuth = function(req, res, next){
    req.authStatus = true;
    if(req.authStatus){
        console.log("Você está, logado. Pode continuar");
        next();
    } else {
        console.log("Você não está logado. Faça login para continuar");
        next();
    }
}

app.use(chekAuth)


app.get('/',  (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})

// Fazer o app escutar e rodar o servidor
app.listen(port, (req, res) => {
    console.log(`Servidor rodando na porta ${port}`)
})