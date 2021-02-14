const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Pedido = new Schema({
  
    nomeClientes: {
        type: String        
    },
    email: {
        type: String        
    },
    telefone: {
        type: String        
    },
    endereco: {
        type: String        

    }, 
    produto_id: {
        type: String        

    },
    quantidade: {
        type: String        

    }
})

mongoose.model('pedidos', Pedido)

