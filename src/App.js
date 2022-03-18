// Geral
import React, { Suspense, lazy } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';

// Home
const Contato = lazy(() => import('./Pages/Home/Contato'));
const Home = lazy(() => import('./Pages/Home/Home'));
const ListDestinos = lazy(() => import('./Pages/Home/ListDestinos'));
const ListPromo = lazy(() => import('./Pages/Home/ListPromo'));

// Cliente
const CreateCliente = lazy(() => import('./Pages/Cliente/CreateCliente'));
const ConsultaCliente = lazy(() => import('./Pages/Cliente/ConsultaCliente'));
const ListCliente = lazy(() => import('./Pages/Cliente/ListCliente'));

// Destino
const ConsultaDestino = lazy(() => import ('./Pages/Destino/ConsultaDestino'));
const ListDestino = lazy(() => import ('./Pages/Destino/ListDestino'));
const CreateDestino = lazy(() => import ('./Pages/Destino/CreateDestino'));

// Pacote
const ListPacote = lazy(() => import ('./Pages/Pacote/ListPacote'));
const CreatePacote = lazy(() => import ('./Pages/Pacote/CreatePacote'));
const ConsultaPacote = lazy(() => import ('./Pages/Pacote/ConsultaPacote'));

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
          <Switch>
            <Suspense fallback={ <h2 className='text-center mt-5'>Carregando...</h2> }>
              
              {/* Home */}
              <Route path="/" exact component={Home}></Route>
              <Route path="/listdestinos" component={ListDestinos}></Route>
              <Route path="/listpromo" component={ListPromo}></Route>
              <Route path="/contato" component={Contato}></Route>

              {/* Cliente */}
              <Route path="/cliente"          component={ListCliente}></Route>
              <Route path="/add-cliente/:id"  component={CreateCliente}></Route>
              <Route path="/clienteconsultar/:nome" component={ConsultaCliente}></Route>

              {/* Destino */}
              <Route path="/listdestino" component={ListDestino} ></Route>
              <Route path="/add-destino/:id" component={CreateDestino} ></Route>
              <Route path="/destinoconsultar/:titulo" component={ConsultaDestino}></Route>

              {/* Pacote */}
              <Route path="/pacote" component={ListPacote}></Route>
              <Route path="/add-pacote/:id" component={CreatePacote} ></Route>
              <Route path="/pacoteconsultar/:id" component={ConsultaPacote}></Route>

            </Suspense>
          </Switch>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
