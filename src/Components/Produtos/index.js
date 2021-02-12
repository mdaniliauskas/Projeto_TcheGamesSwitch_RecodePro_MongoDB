import estilo from './Produtos.css';

function ModeloProduto(props) {
    return (     

        <figure className={props.categoria.acessorios} id="bloco">
            <img src={require(`${props.imagem}`).default} alt="Produtos" width="120px" />
            <figcaption>
                <p className="nome-prod">
                    {props.descricao}
                </p>
                <p className="precoCheio">
                    R$ {props.precoCheio}
                </p>
                <p className="precoDesconto">
                    R$ {props.precoDesconto}
                </p>
            </figcaption>
        </figure>
    )
}

export default ModeloProduto;