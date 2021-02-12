

import { Container, Row } from 'react-bootstrap';


export default function Contatos() {
    
    return (
        <Container>

            <h3>Nossos contatos</h3>
            <br /><br />
            
            <div>
                <div id="contatos">
                    <Row className="justify-content-center">
                    <img src={require('../Components/Produtos/img/logos/Email_logo.jpg').default} alt="Contatos" width="100px" /><br />
                    </Row>
                    <Row className="justify-content-center" style={{color: "cornflowerblue"}}>
                    atendimento@tchegames.com.br<br /> 
                    </Row>                   
                </div>
                <br />
                <div id="contatos">
                     <Row className="justify-content-center">                
                     <img src={require('../Components/Produtos/img/logos/Whats_logo.jpg').default} alt="Contatos" width="100px" /><br />
                     </Row>
                     <Row className="justify-content-center" style={{color: "cornflowerblue"}}>
                     0800-000000<br />
                     </Row>                                      
                </div>
                <br />
                <div id="contatos">
                    <Row className="justify-content-center">
                    <img src={require('../Components/Produtos/img/logos/Teleatendimento_logo.jpg').default} alt="Contatos" width="100px" /><br />                   
                    </Row>
                    <Row className="justify-content-center" style={{color: "cornflowerblue"}}>
                    Atendimento por chat<br />
                    </Row> 
                    <br /><br />                   
                </div>
            </div>      
        </Container>
    )}