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

    login: async (username, password) => {
        set({ loading: true, error: null });
        try {
            const response = await api.post('/accounts/login/', { username, password });
            const { token, role } = response.data;

            if (!token || !role) throw new Error("La réponse ne contient pas les données nécessaires.");

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

    logout: () => {
        localStorage.removeItem('user');
        clearToken();
        set({
            user: null,
            role: null,
            isAuthenticated: false
        });
    },

    register: async (username, email, password, role) => {
        set({ loading: true, error: null });
        try {
            await api.post('/accounts/register/', { username, email, password, role });
            set({ loading: false });
        } catch (error) {
            set({
                error: error.response?.data?.detail || error.message,
                loading: false
            });
        }
    },

    // ✅ Ajout : rehydrate les données depuis localStorage
    rehydrateUser: () => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                const { username, role } = JSON.parse(storedUser);
                const user = new User({ username, role });
                set({
                    user,
                    role,
                    isAuthenticated: true
                });
            } catch (e) {
                console.error("Erreur lors de la rehydratation :", e);
            }
        }
    }
}));

export default useUserStore;
