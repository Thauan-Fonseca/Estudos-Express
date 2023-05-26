const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const basePath = path.join(__dirname, "templates")

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})

//Buscando pasta cadastro
app.get('/users/add', (req,res) => {
    res.sendFile(`${basePath}/useForm.html`)
})

//Fazendo o post no form (saindo no console)
app.post('/users/save', (req,res)=>{
    console.log(req.body);

    const {name, age} = req.body
    console.log(`nome do suário é ${name} e ele tem ${age} anos`)
    res.sendFile(`${basePath}/useform.html`)
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