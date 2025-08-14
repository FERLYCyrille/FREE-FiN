import axios from 'axios';
import { toast } from 'react-toastify';
import { getToken } from './tokenmanager';
export const BASE_URL = "http://localhost:8000";

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
});

// 🔐 Intercepteur des requêtes : ajoute le token si dispo
api.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            console.log("🧪 Interceptor exécuté. Token utilisé :", token);
            config.headers.Authorization = `Token ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

// ❗ Intercepteur de réponses : gère les erreurs 401
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            toast.error("Veuillez vous connecter pour accéder à cette ressource.");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default api;
