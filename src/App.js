import './App.css';
import Menu from './Components/Menu';
import './Components/Menu/Menu.css';
import Rotas from './rotas';
import { BrowserRouter } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <Menu />
      </header>
      <main>
        <Container>
          <Rotas />
        </Container>
      </main>
      <br /><br /><br />
      <footer>
      <Navbar fixed="bottom" bg="dark" expand="lg" style={{color:'red'}} className="justify-content-center">
      Tche Games Switch &reg;  
      </Navbar>
      </footer>      
    </div>
    </BrowserRouter>    
  );
}

export default App;
