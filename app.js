const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

require('./src/models/Pedido')
const Pedido = mongoose.model('pedidos', 'Pedido')

require('./src/db/connect')

app.get('/pedidos', async (req, res) => {
    const pedidosResponse = await Pedido.find()
    const pedidosJson = await pedidosResponse
    return res.json(pedidosJson)
});

app.post('/pedidos', async (req, res) => {
    const novoPedido = new Pedido({
        nomeClientes: req.body.nomeClientes,
        email: req.body.email,
        telefone: req.body.telefone,
    });

    novoPedido.save()
    res.json({Mensagem: "Pedido enviado com sucesso", Pedido: novoPedido})

});


app.listen(3003)