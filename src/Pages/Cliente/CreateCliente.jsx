import React, { Component } from 'react'
import ClienteService from '../../services/ClienteService';

class CreateCliente extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            nome: '',
            telefone: '',
            cpf: '',
            sexo: '',
            idade: ''
        }
        this.changeNomeHandler    = this.changeNomeHandler.bind(this);
        this.changeTelefoneHandler = this.changeTelefoneHandler.bind(this);
        this.changeCpfHandler      = this.changeCpfHandler.bind(this);
        this.changeSexoHandler     = this.changeSexoHandler.bind(this);
        this.changeIdadeHandler     = this.changeIdadeHandler.bind(this);
        this.saveOrUpdateCliente    = this.saveOrUpdateCliente.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ClienteService.getClienteById(this.state.id).then( (res) =>{
                let cliente = res.data;
                this.setState({
                    nome: cliente.nome,
                    telefone: cliente.telefone,
                    cpf: cliente.cpf,
                    sexo: cliente.sexo,
                    idade: cliente.idade
                });
            });
        }        
    }
    saveOrUpdateCliente = (e) => {
        e.preventDefault();
        let cliente = { 
            nome: this.state.nome, 
            telefone: this.state.telefone, 
            cpf: this.state.cpf, 
            sexo: this.state.sexo, 
            idade: this.state.idade
        };

        console.log('cliente => ' + JSON.stringify(cliente));

        // step 5
        if(this.state.id === '_add'){
            ClienteService.createCliente(cliente).then(res =>{
                this.props.history.push('/cliente');
            });
        }else{
            ClienteService.updateCliente(cliente, this.state.id).then( res => {
                this.props.history.push('/cliente');
            });
        }
    }
    
    changeNomeHandler= (event) => {
        this.setState({nome: event.target.value});
    }

    changeTelefoneHandler= (event) => {
        this.setState({telefone: event.target.value});
    }

    changeCpfHandler= (event) => {
        this.setState({cpf: event.target.value});
    }

    changeSexoHandler= (event) => {
        this.setState({sexo: event.target.value});
    }

    changeIdadeHandler= (event) => {
        this.setState({idade: event.target.value});
    }

    cancel(){
        this.props.history.push('/cliente');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-right border-bottom pr-3 pb-3">Adicionar cliente</h3>
        }else{
            return <h3 className="text-right border-bottom pr-3 pb-3">Alterar cliente</h3>
        }
    }
    
    render() {
        return (        
            <div>
                   <div className = "container">
                        <div className = "row p-2">
                            <div className = "card col-md-6 offset-md-3 offset-md-3 shadow pt-3 mt-3 mb-5">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nome </label>
                                            <input placeholder="Nome" name="nome" className="form-control" 
                                                value={this.state.nome} onChange={this.changeNomeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Telefone </label>
                                            <input placeholder="Telefone" name="telefone" className="form-control"
                                                value={this.state.telefone} onChange={this.changeTelefoneHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> CPF </label>
                                            <input placeholder="CPF" name="cpf" className="form-control"
                                                value={this.state.cpf} onChange={this.changeCpfHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Sexo </label>
                                            <select className="custom-select form-control" name="sexo" onChange={this.changeSexoHandler}>
                                                <option selected>{this.state.sexo}</option>
                                                <option>M</option>
                                                <option>F</option>
                                            </select>
                                        </div>
                                        <div className = "form-group">
                                            <label> Idade </label>
                                            <input placeholder="Idade" name="idade" className="form-control" 
                                                value={this.state.idade} onChange={this.changeIdadeHandler}/>
                                        </div>

                                        <button className="btn btn-info" onClick={this.saveOrUpdateCliente}>Salvar</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                   </div>
            </div>
        ) 
    }
}

export default CreateCliente