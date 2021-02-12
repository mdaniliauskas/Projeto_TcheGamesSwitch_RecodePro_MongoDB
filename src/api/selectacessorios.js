const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const conexao = require('./bancodados/conexao')


app.use(bodyParser.urlencoded({ extend: true}));
app.use(express.json());


app.post('/selectacessorios', (req, res) => {
    conexao.query("SELECT * FROM produtos where categoria='acessorios';", (error, result) => {
        res.json(result);  
    })
})
