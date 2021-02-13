const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Pedido = new Schema({
    // id_pedidos: {
    //     type: int        
    // }
    // data: {
    //     type: Timestramp,
    // },
    nomeClientes: {
        type: String        
    },
    email: {
        type: String
        
    },
    telefone: {
        type: String
        
    }
    // produto_id: {
    //     type: Integer,
    //     required: true
    // },
    // quantidade: {
    //     type: Integer,
    //     required: true
    // }
})

mongoose.model('pedidos', Pedido)

