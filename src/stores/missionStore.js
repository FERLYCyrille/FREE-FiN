import api from "../api/apiConfig";

export const createMission = async (formData) => {
    const response = await api.post('/services/missions/', formData);
    return response.data;
};
export const getMyMissions = async () => {
    const response = await api.get('/services/missions/list/');
    return response.data;
};