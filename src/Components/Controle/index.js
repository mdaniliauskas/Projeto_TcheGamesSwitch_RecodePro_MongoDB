import { Table } from 'react-bootstrap';

function ModeloTabela(props) {
    return (  
        <Table striped bordered hover variant="dark">
        <thead>
            <tr>
                <th>Id_Pedidos</th>
                <th>Data</th>
                <th>Cliente</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Endereço</th>
                <th>Id_Produto</th>
                <th>Quantidade (Pedido)</th>
                <th>Categoria</th>
                <th>Descrição</th>
                <th>Preço Cheio</th>
                <th>Preco Desconto</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{props.id_pedidos}</td>
                <td>{props.data}</td>
                <td>{props.nomeClientes}</td>
                <td>{props.email}</td>
                <td>{props.telefone}</td>
                <td>{props.endereco}</td>
                <td>{props.produto_id}</td>
                <td>{props.quantidade}</td>
                <td>{props.categoria}</td>
                <td>{props.descricao}</td>
                <td>{props.precoCheio}</td>
                <td>{props.precoDesconto}</td>
            </tr>
        </tbody>                   
        </Table>       
)
};

export default ModeloTabela;