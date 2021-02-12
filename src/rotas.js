import { Switch, Route } from 'react-router-dom';
import Home from './Páginas/Home';
import Produtos from './Páginas/Produtos';
import Pedidos from './Páginas/Pedidos';
import Controle from './Páginas/Controle';
import Lojas from './Páginas/Lojas';
import Contatos from './Páginas/Contatos';
import Acessorios from './Páginas/Acessorios';
import Consoles from './Páginas/Consoles';
import Jogos from './Páginas/Jogos';

function Rotas() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/produtos' component={Produtos} />
            <Route exact path='/pedidos' component={Pedidos} />
            <Route exact path='/controle' component={Controle} />
            <Route exact path='/lojas' component={Lojas} />
            <Route exact path='/contatos' component={Contatos} />
            <Route exact path='/acessorios' component={Acessorios} />
            <Route exact path='/consoles' component={Consoles} />
            <Route exact path='/jogos' component={Jogos} />
        </Switch>
    )
}

export default Rotas;