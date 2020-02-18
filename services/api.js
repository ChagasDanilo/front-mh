import axios from 'axios';
import auth from './auth';

const api = axios.create({
    baseURL: 'https://williamestrela.herokuapp.com/'
});

api.interceptors.request.use(async config => {
    const token = await auth.token();

    if (token) {
      config.headers.Authorization = 'Bearer ' +token;
    }
    
    return config;
  });
  

export default api;