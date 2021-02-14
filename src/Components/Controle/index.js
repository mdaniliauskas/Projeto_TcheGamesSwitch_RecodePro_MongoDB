import { Table } from 'react-bootstrap';

function ModeloTabela(props) {
    return (  
        <Table striped bordered hover variant="dark">
        <thead>
            <tr>
                <th>Id_Pedidos</th>                
                <th>Cliente</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Endereço</th>
                <th>Id_Produto</th>
                <th>Quantidade (Pedido)</th>                
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{props.id_pedidos}</td>
                <td>{props.nomeClientes}</td>
                <td>{props.email}</td>
                <td>{props.telefone}</td>
                <td>{props.endereco}</td>
                <td>{props.produto_id}</td>
                <td>{props.quantidade}</td>               
            </tr>
        </tbody>                   
        </Table>       
)
};

export default ModeloTabela;