import React, { Component } from 'react'
import ClienteService from '../../services/ClienteService';
class ConsultaCliente extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: this.props.match.params.nome,
            clientes: []
        }
        this.addCliente = this.addCliente.bind(this);
        this.editCliente = this.editCliente.bind(this);
        this.deleteCliente = this.deleteCliente.bind(this);
        this.findCliente = this.findCliente.bind(this)
    }

    deleteCliente(id){
        ClienteService.deleteCliente(id).then( res => {
            this.setState({clientes: this.state.clientes.filter(cliente => cliente.id !== id)});
        });
    }

    editCliente(id){
        this.props.history.push(`/add-cliente/${id}`);
    }

    componentDidMount(){
        ClienteService.getClientesNome(this.state.nome).then((res) => {
            this.setState({ clientes: res.data});
        });
    }

    addCliente(){
        this.props.history.push('/add-cliente/_add');
    }

    findCliente(nome){
        this.props.history.push(`/clienteconsultar/${nome}`);
    }

    render() {
        return (
            <div className="container">
                <h1 className="titulo-paginas">Lista de Clientes</h1>
                <div className="row">
                    <div className="col-3">
                        <button className="btn btn-info" onClick={this.addCliente}> Adicionar </button>
                    </div>
                    <div className="col d-flex justify-content-end">		
                        <form className="form-group">
                            <div className="d-flex justify-content-end">					
                                <input type="text" id="nome" className="form-control mr-2" placeholder="Nome do cliente" />	
                                <button type="submit" className="btn btn-success" onClick={ () => this.findCliente(document.getElementById('nome').value)}>Consultar</button>					
                            </div>
                        </form>	
                    </div>
                </div>
                <div className="overflow-auto">
                    <table className="table table-striped table-sm" >
                        <thead className="border-top">
                            <tr>
                                <th> Id </th>
                                <th> Nome </th>
                                <th> Telefone </th>
                                <th> CPF </th>
                                <th> Sexo </th>
                                <th> Idade </th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.clientes.map(
                                    cliente => 
                                    <tr>
                                        <td> {cliente.id} </td>
                                        <td> {cliente.nome} </td>
                                        <td> {cliente.telefone} </td>
                                        <td> {cliente.cpf} </td>
                                        <td> {cliente.sexo} </td>
                                        <td> {cliente.idade} </td>
                                        <td>
                                            <div className="row mr-1 pr-1 justify-content-end">
                                                <button onClick={ () => this.editCliente(cliente.id)} className="btn btn-info" style={{width:"70px"}}>Editar </button>
                                                <button style={{marginLeft: "10px", width:"70px"}} onClick={ () => this.deleteCliente(cliente.id)} className="btn btn-danger">Excluir </button>
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

export default ConsultaCliente