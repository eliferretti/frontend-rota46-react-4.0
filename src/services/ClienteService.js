import axios from 'axios'

const CLIENTES_REST_API_URL = 'http://localhost:8080/api/clientes';

class ClienteService {

    getClientes(){
        return axios.get(CLIENTES_REST_API_URL);
    }

    getClientesNome(clienteNome){
        return axios.get(CLIENTES_REST_API_URL + 'nome/' + clienteNome);
    }

    createCliente(cliente){
        return axios.post(CLIENTES_REST_API_URL, cliente);
    }

    getClienteById(clienteId){
        return axios.get(CLIENTES_REST_API_URL + '/' + clienteId);
    }

    updateCliente(cliente, clienteId){
        return axios.put(CLIENTES_REST_API_URL + '/' + clienteId, cliente);
    }

    deleteCliente(clienteId){
        return axios.delete(CLIENTES_REST_API_URL + '/' + clienteId);
    }
}

export default new ClienteService();