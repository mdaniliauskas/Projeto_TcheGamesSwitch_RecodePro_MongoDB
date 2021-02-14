import { Container, Table } from 'react-bootstrap';
import ModeloTabela from '../Components/Controle';
import '../Components/Produtos/Produtos.css';
import { useState, useEffect } from 'react';

export default function Controle(props) {
    const [ controle, setControle ] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const resposta = await fetch("http://localhost:3001/insertpedidos");
        const dados = await resposta.json();
        setControle(dados);                                
    }, []);    
    

       return (
        <Container fluid>
            
            <h3>Controle de pedidos</h3><br />
        
            <Table>                  
            {controle && controle.map(item => <ModeloTabela id_pedidos={item._id} nomeClientes={item.nomeClientes} email={item.email} telefone={item.telefone} endereco={item.endereco} produto_id={item.produto_id} quantidade={item.quantidade}  />)}
            </Table>

        </Container>
    );
}

