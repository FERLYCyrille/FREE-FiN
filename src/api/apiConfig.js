import axios from 'axios';
import { getToken } from './tokenmanager';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',  // mettre ta base url ici
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor pour injecter automatiquement le token
api.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

export default api;
