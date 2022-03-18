import axios from 'axios'

const PACOTES_REST_API_URL = 'http://localhost:8080/api/pacotes';

class PacoteService {

    getPacotes(){
        return axios.get(PACOTES_REST_API_URL);
    }

    createPacote(pacote){
        return axios.post(PACOTES_REST_API_URL, pacote);
    }

    getPacoteById(pacoteId){
        return axios.get(PACOTES_REST_API_URL + '/' + pacoteId);
    }

    updatePacote(pacote, pacoteId){
        return axios.put(PACOTES_REST_API_URL + '/' + pacoteId, pacote);
    }

    deletePacote(pacoteId){
        return axios.delete(PACOTES_REST_API_URL + '/' + pacoteId);
    }
}

export default new PacoteService();