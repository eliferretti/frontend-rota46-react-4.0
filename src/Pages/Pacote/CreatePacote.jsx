import React, { Component } from 'react'
import PacoteService from '../../services/PacoteService';

class CreatePacote extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            dataCompra: '',
            dataViagem: '',
            preco: '',
            cliente: {
                id: ''
            },
            destino: {
                id: ''
            },
        }
        this.changeDataCompraHandler    = this.changeDataCompraHandler.bind(this);
        this.changeDataViagemHandler = this.changeDataViagemHandler.bind(this);
        this.changePrecoHandler      = this.changePrecoHandler.bind(this);
        this.changeClienteHandler     = this.changeClienteHandler.bind(this);
        this.changeDestinoHandler     = this.changeDestinoHandler.bind(this);
        this.saveOrUpdatePacote    = this.saveOrUpdatePacote.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            PacoteService.getPacoteById(this.state.id).then( (res) =>{
                let pacote = res.data;
                this.setState({
                    dataCompra: pacote.dataCompra,
                    dataViagem: pacote.dataViagem,
                    preco: this.formataMoeda(pacote.preco),
                    cliente: { id: pacote.cliente.id },
                    destino: { id: pacote.destino.id } 
                });
            });
        }        
    }
    saveOrUpdatePacote = (e) => {
        e.preventDefault();
        let pacote = { 
            dataCompra: this.state.dataCompra,
            dataViagem: this.state.dataViagem,
            preco: this.converteMoedaFloat(this.state.preco),
            cliente: { id: this.state.cliente.id },
            destino: { id: this.state.destino.id }
        };

        console.log('pacote => ' + JSON.stringify(pacote));

        // step 5
        if(this.state.id === '_add'){
            PacoteService.createPacote(pacote).then(res =>{
                this.props.history.push('/pacote');
            });
        }else{
            PacoteService.updatePacote(pacote, this.state.id).then( res => {
                this.props.history.push('/pacote');
            });
        }
    }

    changeDataCompraHandler= (event) => {
        this.setState({dataCompra: event.target.value});
    }

    changeDataViagemHandler= (event) => {
        this.setState({dataViagem: event.target.value});
    }

    changePrecoHandler= (event) => {
        this.setState({preco: event.target.value});
    }

    changeClienteHandler= (event) => {
        this.setState({cliente: { id: event.target.value } });
    }

    changeDestinoHandler= (event) => {
        this.setState({destino: { id: event.target.value } });
    }

    cancel(){
        this.props.history.push('/pacote');
    }

    formataMoeda(moedaImput){
        var grana = moedaImput.toLocaleString('pt-br', {minimumFractionDigits: 2});
        return grana;
    }

    converteMoedaFloat(valor){
           var valor = valor.replace(".","");
           valor = valor.replace(",",".");
           valor = parseFloat(valor);
        return valor;
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-right border-bottom pr-3 pb-3">Adicionar pacote</h3>
        }else{
            return <h3 className="text-right border-bottom pr-3 pb-3">Alterar pacote</h3>
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
                                            <label> Data da compra </label>
                                            <input type="date" placeholder="Data da compra" name="dataCompra" className="form-control" 
                                                value={this.state.dataCompra} onChange={this.changeDataCompraHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Data da viagem </label>
                                            <input type="date" placeholder="Data da viagem" name="dataViagem" className="form-control"
                                                value={this.state.dataViagem} onChange={this.changeDataViagemHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Preço </label>
                                            <input placeholder="Preço" name="preco" className="form-control"
                                                value={this.state.preco} onChange={this.changePrecoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Id cliente </label>
                                            <input placeholder="Id cliente" name="cliente" className="form-control" 
                                                value={this.state.cliente.id} onChange={this.changeClienteHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Id destino </label>
                                            <input placeholder="Id destino" name="destino" className="form-control" 
                                                value={this.state.destino.id} onChange={this.changeDestinoHandler}/>
                                        </div>

                                        <button className="btn btn-info" onClick={this.saveOrUpdatePacote} >Salvar</button>
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

export default CreatePacote