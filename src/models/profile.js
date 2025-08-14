// models/profile.js
export const Diploma = {
    id: null,
    name: "",
    institution: "",
    year: "",
    description: "",
    image: null, // Fichier ou URL selon usage
};

export const Profile = {
    id: null,
    user_fullname: "",
    user_email: "",
    phone: "",
    skills: "",
    diplomas: [], // tableau de Diploma
};
