const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send("Olá, mundo!")
})

// Fazer o app escutar e rodar o servidor
app.listen(port, (req, res) => {
    console.log(`Servidor rodando na porta ${port}`)
})