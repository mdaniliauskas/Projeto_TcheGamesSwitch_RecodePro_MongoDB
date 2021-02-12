

import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Lojas() {

    return (

        <Container>
        <h3>Nossas lojas</h3>
        <br /><br />
            

            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h4 class="text-danger">São Paulo (Matriz)</h4>
                    <p>Avenida Paulista, 2000</p>
                    <p>São Paulo - SP</p>
                    <p>(11) 222222-2222</p>
                    <p><a href="mailto:atendimento.sampa@tchegames.com.br">atendimento.sampa@tchegames.com.br</a></p>
                </ListGroup.Item>

                <ListGroup.Item>     
                <h4 class="text-danger">Rio de Janeiro</h4>
                    <p>Avenida Getúlio Vargas, 1100</p>
                    <p>Rio de Janeiro - RJ</p>
                    <p>(21) 222222-2222</p>
                    <p><a href="mailto:atendimento.rio@tchegames.com.br">atendimento.rio@tchegames.com.br</a></p>                    
                </ListGroup.Item>           
            
               <ListGroup.Item>
                        <h4 class="text-danger">Porto Alegre</h4>
                        <p>Avenida Alberto Bins, 250</p>
                        <p>Porto Alegre - RS</p>
                        <p>(51) 222222-2222</p>
                        <p><a href="mailto:atendimento.poa@tchegames.com.br">atendimento.poa@tchegames.com.br</a></p>                
                </ListGroup.Item>
            </ListGroup>            
    </Container>
)
};