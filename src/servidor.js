const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const conexao = require('./bancodados/conexao');

app.use(cors({origin: 'http://localhost:3000'}));

app.use(bodyParser.urlencoded({ extend: true}));
app.use(express.json());


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




app.post("/insertpedido",(req,res) => {
    let pedido = []
    
    pedido.push({
        nomeClientes: req.body.nomeClientes,
        email: req.body.email,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        produto_id: req.body.produto_id,
        quantidade: req.body.quantidade
    })
    conexao.query('INSERT INTO pedidos SET ?', pedido, () =>{ 
      
    })
  });

  app.get("/selectcontrole", (req,res) => {
    conexao.query("SELECT * FROM pedidos INNER JOIN produtos on pedidos.produto_id = produtos.idprodutos;",(error,result) => {
      res.json(result)
    })
  });







app.listen(3001);