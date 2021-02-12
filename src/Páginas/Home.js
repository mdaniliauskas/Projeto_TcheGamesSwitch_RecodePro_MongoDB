import React from 'react';
import { Container, Row } from 'react-bootstrap';


export default function Home() {

    return (
        <Container>
        
        <h3>Seja bem-vindo(a)!</h3>
        <br /><br />

        <Row className="justify-content-center">
        <p>A Tche Games Switch é a sua loja especializada em Nintendo Switch&trade;</p>
        <p>Aqui você encontra todos os últimos lançamentos, os melhores preços e entrega rápida de consoles, jogos e acessórios!</p> 
        <p>Em nosso site e em nossas lojas você sempre tem a sua disposição um antendente especializado para prontamente tirar suas dúvidas.</p>  
        <br /><br /><br /><br />
        </Row>  

        <Row className="justify-content-center">
        <img src={require('../Components/Produtos/img/produtos/Consoles/Switch_Azul_Vermelho.jpg').default} alt="Produtos" width="150px" />
        <img src={require('../Components/Produtos/img/produtos/Acessorios/Organizador.jpg').default} alt="Produtos" width="<150px" />
        <img src={require('../Components/Produtos/img/produtos/Acessorios/Pelicula.jpg').default} alt="Produtos" width="150px" />
        <img src={require('../Components/Produtos/img/produtos/Acessorios/Charging_Dock.jpg').default} alt="Produtos" width="150px" />
        </Row> 
        </Container>

    )}
