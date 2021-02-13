const mongoose = require('mongoose')

function connect() {
    mongoose.connect('mongodb://localhost/pedidos', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Conectado")
    }).catch((error) => {
        console.log(`Erro de conexão - ${error} `)
    })
    
}

module.exports = connect()