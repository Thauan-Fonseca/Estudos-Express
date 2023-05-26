const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const basePath = path.join(__dirname, "templates")

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})

// Fazer o app escutar e rodar o servidor
app.listen(port, (req, res) => {
    console.log(`Servidor rodando na porta ${port}`)
})