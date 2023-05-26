const express = require('express');
const router = express.Router();
const path = require('path');
const basePath = path.join(__dirname, "../templates")


//Buscando pasta cadastro
router.get('/add', (req,res) => {
    res.sendFile(`${basePath}/useForm.html`)
})

//Fazendo o post no form (saindo no console)
router.post('/save', (req,res)=>{
    console.log(req.body);

    const {name, age} = req.body
    console.log(`nome do suário é ${name} e ele tem ${age} anos`)
    res.sendFile(`${basePath}/useform.html`)
})

// Pegando os parâmetros da URL
router.get("/:id", (req,res)=> {
    const id = req.params.id;

    console.log(`Estamos buscando pelo usuário: ${id}`);

    res.sendFile(`${basePath}/users.html`);
});

module.exports = router;