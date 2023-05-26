const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const basePath = path.join(__dirname, "templates")

//ler o body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// arquivos essstáticos
app.use(express.static('public'))

//importar rotas de usuários
const users = require('./users');

//Utilizando middlewhere para inserir as rotas de usuários
app.use('/users', users)

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
});

app.use((req,res,next) =>{
    res.status(404).sendFile(`${basePath}/404.html`)
})
// Fazer o app escutar e rodar o servidor
app.listen(port, (req, res) => {
    console.log(`Servidor rodando na porta ${port}`)
})