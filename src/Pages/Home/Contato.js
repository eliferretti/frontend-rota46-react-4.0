import contato from '../../lib/imagens/contato.jpeg';
const Contato = () => {
    return(
        <div>
        <main role="main" className="pb-3">
            <section className="conteudo-contato">
                <div className="banner-index">
                    <img src={contato} />
                </div>
                <div >
                    <div >
                            <h1 className="titulo-paginas text-center">Entre em contato conosco</h1>
                    </div>
                    <div >
                            <h4 className="text-center">Ficaremos felizes e saber o que você tem a nos dizer!</h4>
                    </div>
                    <div className="input-container">
                            <div >
                                <div className="styled-input wide">
                                    <input type="text" required />
                                    <label>Nome</label> 
                                </div>
                            </div>
                            <div >
                                <div className="styled-input">
                                    <input type="text" required />
                                    <label>Email</label> 
                                </div>
                            </div>
                            <div >
                                <div className="styled-input">
                                    <input type="text" required />
                                    <label>Telefone</label> 
                                </div>
                            </div>
                            <div >
                                <div className="styled-input wide">
                                    <textarea required></textarea>
                                    <label>Mensagem</label>
                                </div>
                            </div>
                            <button className="btn btn-primary">Enviar</button>
                           
                    </div>
                </div>
           
            </section>
        

        </main>
    </div>
    );
}
export default Contato;