import React, { Component } from 'react'
import PacoteService from '../../services/PacoteService';
class ListPacote extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pacotes: []
        }
        this.addPacote = this.addPacote.bind(this);
        this.editPacote = this.editPacote.bind(this);
        this.deletePacote = this.deletePacote.bind(this);
        this.findPacote = this.findPacote.bind(this)
    }

    deletePacote(id){
        PacoteService.deletePacote(id).then( res => {
            this.setState({pacotes: this.state.pacotes.filter(pacote => pacote.id !== id)});
        });
    }

    editPacote(id){
        this.props.history.push(`/add-pacote/${id}`);
    }

    componentDidMount(){
        PacoteService.getPacotes().then((res) => {
            this.setState({ pacotes: res.data});
        });
    }

    addPacote(){
        this.props.history.push('/add-pacote/_add');
    }
    
    findPacote(id){
        this.props.history.push(`/pacoteconsultar/${id}`);
    }

    formataData(dataInput){
        var data = new Date(dataInput);
        var dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
        return dataFormatada;
    }
    formataMoeda(moedaImput){
        var grana = moedaImput.toLocaleString('pt-br', {minimumFractionDigits: 2});
        return grana;
    }
    
    render() {
        return (
            <div className="container">
                <h1 className="titulo-paginas">Lista de pacotes</h1>
                <div className="row">
                    <div className="col-3">
                        <button className="btn btn-info" onClick={this.addPacote}> Adicionar </button>
                    </div>
                    <div className="col d-flex justify-content-end">		
                        <form action="/clienteconsultar" method="get" className="form-group">
                            <div className="d-flex justify-content-end">					
                                <input type="text" id="id" name="txtNome" className="form-control mr-2" placeholder="Id do pacote" />	
                                <button type="submit" className="btn btn-success" onClick={ () => this.findPacote(document.getElementById('id').value)}>Consultar</button>					
                            </div>
                        </form>	
                    </div>
                </div>
                <div className="overflow-auto">
                    <table className="table table-striped table-sm" >
                        <thead className="border-top">
                            <tr>
                                <th> Id </th>
                                <th> Data compra </th>
                                <th> Data viagem </th>
                                <th> Preço </th>
                                <th> Cliente </th>
                                <th> Telefone </th>
                                <th> CPF </th>
                                <th> Destino </th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                 
                                this.state.pacotes.map(
                                    pacote => 
                                    <tr>
                                        <td> {pacote.id} </td>
                                        <td> {this.formataData(pacote.dataCompra)} </td>
                                        <td> {this.formataData(pacote.dataViagem)} </td>
                                        <td> {this.formataMoeda(pacote.preco)} </td>
                                        <td> {pacote.cliente.nome} </td>
                                        <td> {pacote.cliente.telefone} </td>
                                        <td> {pacote.cliente.cpf} </td>
                                        <td> {pacote.destino.titulo} </td>
                                        <td>
                                            <div className="row mr-1 pr-2 justify-content-end">
                                                <button onClick={ () => this.editPacote(pacote.id)} className="btn btn-info" style={{width:"70px"}}>Editar </button>
                                                <button style={{marginLeft: "10px", width:"70px"}} onClick={ () => this.deletePacote(pacote.id)} className="btn btn-danger">Excluir </button>
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

export default ListPacote