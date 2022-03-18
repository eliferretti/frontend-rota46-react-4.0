import React, { Component } from 'react'
import DestinoService from '../../services/DestinoService';

class CreateDestino extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            titulo: '',
            descricao: '',
            tipo: '',
            promo: '',
            preco: ''
        }
        this.changeTituloHandler    = this.changeTituloHandler.bind(this);
        this.changeDescricaoHandler = this.changeDescricaoHandler.bind(this);
        this.changeTipoHandler      = this.changeTipoHandler.bind(this);
        this.changePromoHandler     = this.changePromoHandler.bind(this);
        this.changePrecoHandler     = this.changePrecoHandler.bind(this);
        this.saveOrUpdateDestino    = this.saveOrUpdateDestino.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            DestinoService.getDestinoById(this.state.id).then( (res) =>{
                let destino = res.data;
                this.setState({
                    titulo: destino.titulo,
                    descricao: destino.descricao,
                    tipo: destino.tipo,
                    promo: destino.promo,
                    preco: this.formataMoeda(destino.preco)
                });
            });
        }        
    }
    saveOrUpdateDestino = (e) => {
        e.preventDefault();
        let destino = { 
                titulo: this.state.titulo, 
                descricao: this.state.descricao, 
                tipo: this.state.tipo, 
                promo: this.state.promo, 
                preco: this.converteMoedaFloat(this.state.preco)
            };

        console.log('destino => ' + JSON.stringify(destino));

        // step 5
        if(this.state.id === '_add'){
            DestinoService.createDestino(destino).then(res =>{
                this.props.history.push('/listdestino');
            });
        }else{
            DestinoService.updateDestino(destino, this.state.id).then( res => {
                this.props.history.push('/listdestino');
            });
        }
    }
    
    changeTituloHandler= (event) => {
        this.setState({titulo: event.target.value});
    }

    changeDescricaoHandler= (event) => {
        this.setState({descricao: event.target.value});
    }

    changeTipoHandler= (event) => {
        this.setState({tipo: event.target.value});
    }

    changePromoHandler= (event) => {
        this.setState({promo: event.target.value});
    }

    changePrecoHandler= (event) => {
        this.setState({preco: event.target.value});
    }

    cancel(){
        this.props.history.push('/listdestino');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-right border-bottom pr-3 pb-3">Adicionar destino</h3>
        }else{
            return <h3 className="text-right border-bottom pr-3 pb-3">Alterar destino</h3>
        }
    }

    formataMoeda(moedaImput){
        var grana = moedaImput.toLocaleString('pt-br', {minimumFractionDigits: 2});
        return grana;
    }

    converteMoedaFloat(valor){
           valor = valor.replace(".","");
           valor = valor.replace(",",".");
           valor = parseFloat(valor);
        return valor;
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
                                            <label> Título </label>
                                            <input placeholder="Titulo" name="titulo" className="form-control" 
                                                value={this.state.titulo} onChange={this.changeTituloHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Descrição </label>
                                            <textarea placeholder="Descrição" name="descricao" className="form-control" rows="3" value={this.state.descricao} onChange={this.changeDescricaoHandler}></textarea>
                                        </div>
                                        <div className = "form-group">
                                            <label> Tipo </label>
                                            <select className="custom-select form-control" name="tipo" onChange={this.changeTipoHandler}>
                                                <option selected>{this.state.tipo}</option>
                                                <option>Nacional</option>
                                                <option>Internacional</option>
                                            </select>
                                        </div>
                                        <div className = "form-group">
                                            <label> Promo </label>
                                            <select className="custom-select form-control" name="promo" onChange={this.changePromoHandler}>
                                                <option selected>{this.state.promo}</option>
                                                <option>Sim</option>
                                                <option>Não</option>
                                            </select>
           
                                        </div>
                                        <div className = "form-group">
                                            <label> Preço </label>
                                            <input placeholder="Preço" name="preco" className="form-control" 
                                                value={this.state.preco} onChange={this.changePrecoHandler}/>
                                        </div>

                                        <button className="btn btn-info" onClick={this.saveOrUpdateDestino}>Salvar</button>
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

export default CreateDestino