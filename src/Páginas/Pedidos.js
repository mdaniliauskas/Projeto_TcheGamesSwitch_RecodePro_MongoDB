import {useState} from 'react';
import { Form, Button } from "react-bootstrap";


export default function Pedidos(props) {

    const [ form, setForm ] = useState({
        nomeClientes: "",
        email:"",
        telefone: "",
        endereco: "",
        produto_id: "",
        quantidade: ""
    });

    const alteracao = (evento) => {
        setForm({
            ...form,
            [evento.target.id]: evento.target.value
        })        
    };  

    const Envio = async (evento) => {
             
        // eslint-disable-next-line no-unused-vars
        // const resultado = await fetch("http://localhost:3001/insertpedido", { method: "POST", body: new FormData(evento.target) });
        // const dados = await resultado.json();
        // setForm(dados) 
        
        const resultado = await fetch("http://localhost:3001/insertpedido", {method: "POST", headers: {"Content-Type": "application/json",},body:JSON.stringify(form)});
        
        alert("Pedido enviado com sucesso!")
    };   
    

    return (
        <div className="form-group col-md-6">            
                <h3>Realizar pedido</h3><br />
                <Form onSubmit={Envio}>
                <Form.Group>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control onChange={alteracao} type="text" id="nomeClientes" name="nomeClientes" placeholder="Nome completo" />
                   
                    <Form.Label>Email:</Form.Label>
                    <Form.Control onChange={alteracao} type="email" id="email" name="email" placeholder="Email" />
                   
                    <Form.Label>Telefone:</Form.Label>
                    <Form.Control onChange={alteracao} type="text" id="telefone" name="telefone" placeholder="Telefone" />

                    <Form.Label>Endereço:</Form.Label>
                    <Form.Control onChange={alteracao} type="text" id="endereco" name="endereco" placeholder="Endereço completo" />

                    <Form.Label>Selecione o produto desejado:</Form.Label>
                    <Form.Control onChange={alteracao} as="select" id="produto_id" name="produto_id">
                    <option value="1">Nintendo Switch - Vermelho e Azul</option>
                    <option value="2">Nintendo Switch - Cinza</option>
                    <option value="3">Nintendo Switch Lite - Amarelo</option>
                    <option value="4">Nintendo Switch Lite - Cinza</option>
                    <option value="5">Nintendo Switch Lite - Coral</option>
                    <option value="6">Nintendo Switch Lite - Turquesa</option>
                    <option value="7">Super Mario Odyssey</option>
                    <option value="8">Mario Kart</option>
                    <option value="9">The Legend Of Zelda Breath Of The Wild</option>
                    <option value="10">Sonic Forces</option>
                    <option value="11">Pokémon Sword</option>
                    <option value="12">Dock Station Charging</option>
                    <option value="13">Organizador de jogos</option>
                    <option value="14">Película de vidro ultra-resistente</option>
                    <option value="15">Pro Contoller Nintendo Switch</option>
                    </Form.Control>

                    <Form.Label>Quantidade:</Form.Label>
                    <Form.Control onChange={alteracao} type="text" id="quantidade" name="quantidade" placeholder="Quantidade do produto" />
                    <br />
                    <Button variant="primary" type="submit">Enviar</Button>
                </Form.Group>
                </Form>          
        </div>
    )
}

