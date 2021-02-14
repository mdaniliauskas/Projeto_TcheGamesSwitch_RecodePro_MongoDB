const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const conexao = require('./bancodados/conexao');

app.use(cors({origin: 'http://localhost:3000'}));

app.use(bodyParser.urlencoded({ extend: true}));
const mongoose = require('mongoose')

app.use(express.json())

app.get('/selecttodos', (req, res) => {
    conexao.query("SELECT * FROM produtos;", (error, result) => {
        res.json(result);  
    })
});


app.get('/selectconsoles', (req, res) => {
    conexao.query("SELECT * FROM produtos where categoria='consoles';", (error, result) => {
        res.json(result);  
    })
});

app.get('/selectjogos', (req, res) => {
    conexao.query("SELECT * FROM produtos where categoria='jogos';", (error, result) => {
        res.json(result);  
    })
});

app.get('/selectacessorios', (req, res) => {
    conexao.query("SELECT * FROM produtos where categoria='acessorios';", (error, result) => {
        res.json(result);  
    })
});


require('./models/Pedido')
const Pedido = mongoose.model('pedidos', 'Pedido')

require('./db/connect')

app.get('/insertpedidos', async (req, res) => {
    const pedidosResponse = await Pedido.find()
    const pedidosJson = await pedidosResponse
    return res.json(pedidosJson)
});

app.post('/insertpedidos', async (req, res) => {
    const novoPedido = new Pedido({
        nomeClientes: req.body.nomeClientes,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        produto_id: req.body.produto_id,
        quantidade: req.body.quantidade
    });

    novoPedido.save()
    res.json({Mensagem: "Pedido enviado com sucesso", Pedido: novoPedido})

});


app.listen(3001)