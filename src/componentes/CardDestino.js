import turismo from '../lib/imagens/turismo.jpg';
const CardDestino = (props) =>{
    return(
        <div className="col-sm-3">
            <div className="bg-light text-center rounded m-2 rounded shadow">
                <img src={turismo} class="img-fluid mx-auto d-block rounded"/>
                <h4 className="px-1">{props.titulo}</h4>
                <p className="px-1 mh-100">{props.descricao}</p>                       
                <p className="px-1 py-2 bg-success text-light">Apenas <strong>R$ {props.preco}</strong></p>
            </div>
        </div>
    );
}
export default CardDestino;
