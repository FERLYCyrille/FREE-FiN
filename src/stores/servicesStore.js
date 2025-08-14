import api from '../api/apiConfig';

// Créer un service avec FormData pour gérer fichiers
export const createService = async (serviceData) => {
    const formData = new FormData();

    formData.append('title', serviceData.title);
    formData.append('category', serviceData.category);
    formData.append('description', serviceData.description);
    formData.append('pricing_model', serviceData.pricing_model);
    formData.append('delivery_time', serviceData.delivery_time);
    formData.append('client_documents_needed', serviceData.client_documents_needed);

    if (serviceData.optional_document) {
        formData.append('optional_document', serviceData.optional_document);
    }
    if (serviceData.cover_image) {
        formData.append('cover_image', serviceData.cover_image);
    }

    const response = await api.post('/services/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
};
export const getMyServices = async () => {
    const response = await api.get('/services/my/');
    return response.data;
};
// Supprimer un service
export const deleteService = async (id) => {
    const response = await api.delete(`/services/${id}/`);
    return response.data;
};

// Mettre à jour un service (partiel avec PATCH)
export const updateService = async (id, updatedData) => {
    const formData = new FormData();

    for (let key in updatedData) {
        if (updatedData[key] !== null && updatedData[key] !== undefined) {
            formData.append(key, updatedData[key]);
        }
    }

    const response = await api.patch(`/services/${id}/`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data;
};
export const fetchCategories = async () => {
    const response = await api.get('/services/categories/');
    return response.data;
};

// Récupérer tous les services d'un utilisateur spécifique par ID
export const getServicesByUserId = async (userId) => {
    const response = await api.get(`/services/user/${userId}/`);
    return response.data;
};

export const getServiceBySlug = async (slug) => {
    const response = await api.get(`/services/${slug}/`);
    return response.data;
};

export const fetchServices = async () => {
    const response = await api.get('/services/');
    return response.data;
};
