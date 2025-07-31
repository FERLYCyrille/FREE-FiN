// src/store/userStore.js
import { create } from 'zustand';
import api from '../api/apiConfig';
import User from '../models/User';
import { setToken, clearToken } from '../api/tokenmanager';

const useUserStore = create((set) => ({
    user: null,
    role: null,
    isAuthenticated: false,
    loading: false,
    error: null,

    // Connexion : appeler l'API login, stocker token et user
    login: async (username, password) => {
        set({ loading: true, error: null });
        try {
            const response = await api.post('/accounts/login/', { username, password });
            const { token, role } = response.data;

            if (!token || !role) {
                throw new Error("La réponse ne contient pas les données nécessaires.");
            }

            const user = new User({ username, role });
            setToken(token);
            localStorage.setItem('user', JSON.stringify({ username, role }));

            set({
                user,
                role,
                isAuthenticated: true,
                loading: false
            });
        } catch (error) {
            set({
                error: error.response?.data?.detail || error.message,
                loading: false
            });
        }
    },

    // Déconnexion : supprime token et réinitialise les états utilisateur
    logout: () => {
        localStorage.removeItem('user'); // ✅ on nettoie aussi ici
        clearToken();
        set({
            user: null,
            role: null,
            isAuthenticated: false
        });
    },

    // Inscription
    register: async (username, email, password, role) => {
        set({ loading: true, error: null });
        try {
            console.log("Envoi du register :", username, email, password, role);
            await api.post('/accounts/register/', { username, email, password, role });
            set({ loading: false });
        } catch (error) {
            set({
                error: error.response?.data?.detail || error.message,
                loading: false
            });
        }
    }
}));

export default useUserStore;
