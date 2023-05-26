const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const basePath = path.join(__dirname, "templates")

//ler o body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
});



//importar rotas de usuários
const users = require('./users');

//Utilizando middlewhere para inserir as rotas de usuários

app.use('/users', users)

// Fazer o app escutar e rodar o servidor
app.listen(port, (req, res) => {
    console.log(`Servidor rodando na porta ${port}`)
})