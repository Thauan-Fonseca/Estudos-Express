const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const basePath = path.join(__dirname, "templates")

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})

// Pegando os parâmetros da URL
app.get("/users/:id", (req,res)=> {
    const id = req.params.id;

    console.log(`Estamos buscando pelo usuário: ${id}`);

    res.sendFile(`${basePath}/users.html`);
})

// Fazer o app escutar e rodar o servidor
app.listen(port, (req, res) => {
    console.log(`Servidor rodando na porta ${port}`)
})