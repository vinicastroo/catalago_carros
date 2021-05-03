import axios from 'axios';
import { URL_BACKEND } from '../env';

const api = axios.create({
  baseURL: URL_BACKEND,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('@Magaventures:token');
      localStorage.removeItem('@Magaventures:user');
    }

    return Promise.reject(error);
  }
);

export default api;
