import axios from 'axios';

const api = axios.create({
    baseURL: 'https://williamestrela.herokuapp.com/'
});



export default api;