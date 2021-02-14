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
        
        const resultado = await fetch("http://localhost:3001/insertpedidos", {method: "POST", headers: {"Content-Type": "application/json",},body:JSON.stringify(form)});
        
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
                    <option value=""></option>    
                    <option value="Nintendo Switch - Vermelho e Azul">Nintendo Switch - Vermelho e Azul</option>
                    <option value="Nintendo Switch - Cinza">Nintendo Switch - Cinza</option>
                    <option value="Nintendo Switch Lite - Amarelo">Nintendo Switch Lite - Amarelo</option>
                    <option value="Nintendo Switch Lite - Cinza">Nintendo Switch Lite - Cinza</option>
                    <option value="Nintendo Switch Lite - Coral">Nintendo Switch Lite - Coral</option>
                    <option value="Nintendo Switch Lite - Turquesa">Nintendo Switch Lite - Turquesa</option>
                    <option value="Super Mario Odyssey">Super Mario Odyssey</option>
                    <option value="Mario Kart">Mario Kart</option>
                    <option value="The Legend Of Zelda Breath Of The Wild">The Legend Of Zelda Breath Of The Wild</option>
                    <option value="Sonic Forces">Sonic Forces</option>
                    <option value="Pokémon Sword">Pokémon Sword</option>
                    <option value="Dock Station Charging">Dock Station Charging</option>
                    <option value="Organizador de jogos3">Organizador de jogos</option>
                    <option value="Película de vidro ultra-resistente">Película de vidro ultra-resistente</option>
                    <option value="Pro Contoller Nintendo Switch">Pro Contoller Nintendo Switch</option>
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

