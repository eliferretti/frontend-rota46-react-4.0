import React, { Component } from 'react'
import DestinoService from '../../services/DestinoService';
import CardDestino from '../../componentes/CardDestino';

class ListPromo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            destinos: []
        }
    }

    componentDidMount(){
        DestinoService.getDestinosPromo().then((res) => {
            this.setState({ destinos: res.data});
        });
    }

    formataMoeda(moedaImput){
        var grana = moedaImput.toLocaleString('pt-br', {minimumFractionDigits: 2});
        return grana;
    }

    render() {
        return (
            <div className="container">
                <h1 className="titulo-paginas text-center">Destinos em pormoção</h1>
                <div className="row">
                    <main className="d-flex flex-wrap justify-content-start col-sm-12">   
                        {
                            this.state.destinos.map(
                                destino => 
                                <CardDestino titulo={destino.titulo} descricao={destino.descricao} preco={this.formataMoeda(destino.preco)}/>                            
                            )
                        }
                    </main>
                </div>
            </div>
        )
    }
}

export default ListPromo