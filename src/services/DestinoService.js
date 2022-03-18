import axios from 'axios'

const DESTINOS_REST_API_URL = 'http://localhost:8080/api/destinos';

class DestinoService {

    getDestinos(){
        return axios.get(DESTINOS_REST_API_URL);
    }

    getDestinosPromo(){
        return axios.get(DESTINOS_REST_API_URL + 'promo');
    }

    getDestinosTitulo(destinoTitulo){
        return axios.get(DESTINOS_REST_API_URL + 'titulo/' + destinoTitulo);
    }

    createDestino(destino){
        return axios.post(DESTINOS_REST_API_URL, destino);
    }

    getDestinoById(destinoId){
        return axios.get(DESTINOS_REST_API_URL + '/' + destinoId);
    }

    updateDestino(destino, destinoId){
        return axios.put(DESTINOS_REST_API_URL + '/' + destinoId, destino);
    }

    deleteDestino(destinoId){
        return axios.delete(DESTINOS_REST_API_URL + '/' + destinoId);
    }

}

export default new DestinoService();