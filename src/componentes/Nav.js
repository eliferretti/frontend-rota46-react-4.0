import { Link } from 'react-router-dom';
function Nav() {
    return(     
        <header>
            <div className="barra-menu"></div>
            <nav className="navbar navbar-expand-sm border-botton navbar-light">
                <div className="container">
                    <div className="logo" >
                        <h1>
                            <Link to="/"><span id="logo" className="navbar-brand" href="">Rot@ 46</span></Link>
                        </h1>
                    </div>
                    <div className="justify-content-end">       
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div  className="navbar-collapse collapse d-sm-inline-flex">
                            <ul className="navbar-nav flex-grow-1">
                                <li ></li>
                                <li class="nav-item">
                                    <Link className="nav-link text-light" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link text-light" to="/listdestinos">Destinos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/listpromo">Promoções</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/contato">Contato</Link>
                                </li>             
                                <li>
                                    <div className="dropdown">
                                        <button className="btn btn-success text-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Gerenciar
                                        </button>
                                        <div className="dropdown-menu bg-success text-light shadow " aria-labelledby="dropdownMenuButton">
                                            <Link className="nav-link text-light" to="/cliente">Cliente</Link>
                                            <Link className="nav-link text-light" to="/listdestino">Destino</Link>
                                            <Link className="nav-link text-light" to="/pacote">Pacote</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Nav;