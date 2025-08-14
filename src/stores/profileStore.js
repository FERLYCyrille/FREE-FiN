import { create } from "zustand";
import api from "../api/apiConfig";

export const useProfileStore = create((set) => ({
    profile: null,
    loading: false,
    error: null,
    profiles: [],

    loadProfile: async () => {
        set({ loading: true, error: null });
        try {
            const res = await api.get("/profil/profile/");
            set({ profile: res.data, loading: false });
        } catch (err) {
            set({
                error: err.response?.data?.message || err.message,
                loading: false,
            });
        }
    },

    saveProfile: async (profileData) => {
        try {
            const isFormData = profileData instanceof FormData;
            const res = await api.put("/profil/profile/", profileData, {
                headers: isFormData ? { 'Content-Type': 'multipart/form-data' } : {},
            });
            set({ profile: res.data });
        } catch (err) {
            set({ error: err.response?.data?.message || err.message });
        }
    },


    addDiploma: async (diploma) => {
        set({ error: null });
        try {
            const formData = new FormData();
            Object.entries(diploma).forEach(([key, value]) => {
                if (value) formData.append(key, value);
            });

            const res = await api.post("/profil/diplomas/", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            set((state) => ({
                profile: {
                    ...state.profile,
                    diplomas: [...(state.profile?.diplomas || []), res.data],
                },
            }));
        } catch (err) {
            set({ error: err.response?.data?.message || err.message });
        }
    },

    updateDiploma: async (id, diploma) => {
        set({ error: null });
        try {
            const formData = new FormData();
            Object.entries(diploma).forEach(([key, value]) => {
                if (value) formData.append(key, value);
            });

            const res = await api.put(`/profil/diplomas/${id}/`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            set((state) => ({
                profile: {
                    ...state.profile,
                    diplomas: state.profile.diplomas.map((d) =>
                        d.id === id ? res.data : d
                    ),
                },
            }));
        } catch (err) {
            set({ error: err.response?.data?.message || err.message });
        }
    },

    deleteDiploma: async (id) => {
        set({ error: null });
        try {
            await api.delete(`/profil/diplomas/${id}/`);
            set((state) => ({
                profile: {
                    ...state.profile,
                    diplomas: state.profile.diplomas.filter((d) => d.id !== id),
                },
            }));
        } catch (err) {
            set({ error: err.response?.data?.message || err.message });
        }
    },

    loadProfiles: async (filters = {}) => {
        set({ loading: true, error: null });
        try {
            // Construction de l'URL avec query params optionnels
            let url = "/profil/profiles/";
            const params = new URLSearchParams(filters).toString();
            if (params) url += `?${params}`;

            const res = await api.get(url);
            set({ profiles: res.data, loading: false });
        } catch (err) {
            set({
                error: err.response?.data?.message || err.message,
                loading: false,
            });
        }
    },
    // 🔹 Nouveau : Charger un profil par slug
    loadProfileBySlug: async (slug) => {
        set({ loading: true, error: null });
        try {
            const res = await api.get(`/profil/profiles/${slug}/`);
            set({ selectedUserProfile: res.data, loading: false });
        } catch (err) {
            set({
                error: err.response?.data?.message || err.message,
                loading: false,
            });
        }
    },

}));

export default useProfileStore;
