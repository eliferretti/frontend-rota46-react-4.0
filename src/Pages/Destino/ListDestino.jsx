import React, { Component } from 'react'
import DestinoService from '../../services/DestinoService';
class ListDestinoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            destinos: []
        }
        this.addDestino = this.addDestino.bind(this);
        this.editDestino = this.editDestino.bind(this);
        this.deleteDestino = this.deleteDestino.bind(this);
        this.findDestino = this.findDestino.bind(this)
    }

    deleteDestino(id){
        DestinoService.deleteDestino(id).then( res => {
            this.setState({destinos: this.state.destinos.filter(destino => destino.id !== id)});
        });
    }

    editDestino(id){
        this.props.history.push(`/add-destino/${id}`);
    }

    componentDidMount(){
        DestinoService.getDestinos().then((res) => {
            this.setState({ destinos: res.data});
        });
    }

    addDestino(){
        this.props.history.push('/add-destino/_add');
    }

    findDestino(titulo){
        this.props.history.push(`/destinoconsultar/${titulo}`);
    }

    formataMoeda(moedaImput){
        var grana = moedaImput.toLocaleString('pt-br', {minimumFractionDigits: 2});
        return grana;
    }

    render() {
        return (
            <div className="container">
                <h1 className="titulo-paginas">Lista de destinos</h1>
                <div className="row">
                    <div className="col-3">
                        <button className="btn btn-info" onClick={this.addDestino}> Adicionar </button>
                    </div>
                    <div className="col d-flex justify-content-end">		
                        <form action="/destinoconsultar" method="get" className="form-group">
                            <div className="d-flex justify-content-end">					
                                <input type="text" id="titulo" name="txtTitulo" className="form-control mr-2" placeholder="Informe destino" />	
                                <button type="submit" className="btn btn-success" onClick={ () => this.findDestino(document.getElementById('titulo').value)}>Consultar</button>					
                            </div>
                        </form>	
                    </div>
                </div>
                <div className="overflow-auto">
                    <table className="table table-striped table-sm" >
                        <thead className="border-top">
                            <tr>
                                <th> Id </th>
                                <th> Destino </th>
                                <th> Descrição </th>
                                <th> Tipo </th>
                                <th> Promo </th>
                                <th> Preço </th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.destinos.map(
                                    destino => 
                                    <tr>
                                        <td> {destino.id} </td>
                                        <td> {destino.titulo} </td>
                                        <td> {destino.descricao} </td>
                                        <td> {destino.tipo} </td>
                                        <td> {destino.promo} </td>
                                        <td> {this.formataMoeda(destino.preco)} </td>
                                        <td>
                                            <div className="row mr-1 pr-2 justify-content-end">
                                                <button onClick={ () => this.editDestino(destino.id)} className="btn btn-info" style={{width:"70px"}}>Editar </button>
                                                <button style={{marginLeft: "10px", width:"70px"}} onClick={ () => this.deleteDestino(destino.id)} className="btn btn-danger">Excluir </button>
                                            </div>
                                        </td>
                                    </tr>    
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListDestinoComponent