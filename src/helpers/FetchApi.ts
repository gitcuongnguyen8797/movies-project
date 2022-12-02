import axios from "axios";

class FetchApi {
    private endpoint: string;
    private apiKey: string = '4dd1feef466c0ae9ac7dc972f2a6de33'
    private lang: string = 'en-US'

    constructor() {
        this.endpoint = "https://api.themoviedb.org/3"
    }

    get(path: string, params?: [{}]) {
        const url = `${this.endpoint}/${path}?api_key=${this.apiKey}&language=${this.lang}&${params?.join('&')}`;
        return axios.get(url);
    }
}


export default new FetchApi();