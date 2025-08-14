import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../api/apiConfig";
import { useProfileStore } from "../../stores/profileStore";

export default function ProfileSettings() {
    const {
        profile,
        loadProfile,
        saveProfile,
        addDiploma,
        deleteDiploma,
        error,
        loading,
    } = useProfileStore();
    const [photo, setPhoto] = useState(null);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [diplomas, setDiplomas] = useState([]);
    const [bio, setBio] = useState("");
    const [skills, setSkills] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [introVideo, setIntroVideo] = useState(null);
    const [showPreviewModal, setShowPreviewModal] = useState(false);



    // Charger les données au montage
    useEffect(() => {
        loadProfile();
    }, []);

    // Mettre à jour les champs quand le profil est chargé
    useEffect(() => {
        if (profile) {
            console.log("Profil reçu :", profile);
            setFullName(profile.full_name || "");
            setEmail(profile.email || "");
            setPhone(profile.phone || "");
            setDiplomas(profile.diplomas || []);
            setPhoto(profile.photo || null);
            setBio(profile.bio || "");
            setSkills(profile.skills || "");
            setLinkedin(profile.linkedin_url || "");
            setIntroVideo(profile.intro_video || null);
        }
    }, [profile]);


    const handleSaveProfile = async () => {
        const formData = new FormData();
        formData.append('phone', phone);
        formData.append("bio", bio);
        formData.append("skills", skills);
        formData.append("linkedin_url", linkedin);
        if (photo) formData.append("photo", photo);
        if (introVideo) formData.append("intro_video", introVideo);


        // Note : fullName et email sont en lecture seule côté backend, donc ne pas les envoyer si pas gérés.

        try {
            await saveProfile(formData);
            await loadProfile();
        } catch (err) {
            console.error(err);
        }
    };


    const handleAddLocalDiploma = () => {
        setDiplomas([
            ...diplomas,
            { name: "", institution: "", year: "", description: "", image: null },
        ]);
    };

    const handleLocalDiplomaChange = (index, field, value) => {
        const updated = [...diplomas];
        updated[index][field] = value;
        setDiplomas(updated);
    };

    const handleUploadDiploma = async (diploma, index) => {
        await addDiploma(diploma);
        await loadProfile();
    };

    const handleDeleteDiploma = async (id) => {
        if (id) {
            await deleteDiploma(id);
            await loadProfile();
        } else {
            // Si pas d'id (pas encore sauvegardé), juste retirer localement
            setDiplomas(diplomas.filter((_, i) => i !== id));
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-6 space-y-6 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold">Profile Settings</h2>

            {loading && <p className="text-gray-500">Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}

            {/* Informations personnelles */}
            <section className="bg-gray-50 border rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>

                <div>
                    <label className="block text-sm font-medium">Profile Photo</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setPhoto(e.target.files[0])}
                        className="w-full border rounded-md p-2 mt-1"
                    />
                    {/* Affiche la photo actuelle ou preview */}
                    {photo && typeof photo === "string" && (
                        <img src={`${BASE_URL}${photo}`} alt="Profile" className="w-32 h-32 rounded-full mt-2" />
                    )}
                    {photo && typeof photo === "object" && (
                        <img src={URL.createObjectURL(photo)} alt="Profile Preview" className="w-32 h-32 rounded-full mt-2" />
                    )}
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium">Full Name</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full border rounded-md p-2 mt-1"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border rounded-md p-2 mt-1"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-medium">Phone</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full border rounded-md p-2 mt-1"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-gray-50 border rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Présentation professionnelle</h3>

                <div>
                    <label className="block text-sm font-medium">Biographie</label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        rows="4"
                        className="w-full border rounded-md p-2 mt-1"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Compétences</label>
                    <textarea
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        rows="2"
                        className="w-full border rounded-md p-2 mt-1"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Lien LinkedIn</label>
                    <input
                        type="url"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                        className="w-full border rounded-md p-2 mt-1"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Vidéo de présentation</label>
                    <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => setIntroVideo(e.target.files[0])}
                        className="w-full border rounded-md p-2 mt-1"
                    />
                    {introVideo && (
                        <video controls className="mt-2 w-full max-h-60 rounded">
                            <source
                                src={typeof introVideo === "string" ? `${BASE_URL}${introVideo}` : URL.createObjectURL(introVideo)}
                                type="video/mp4"
                            />
                            Votre navigateur ne supporte pas cette vidéo.
                        </video>
                    )}
                </div>
            </section>


            {/* Diplômes */}
            <section className="bg-gray-50 border rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Diplomas & Certifications</h3>

                {diplomas.map((diploma, index) => (
                    <div key={index} className="border rounded-md p-4 space-y-3 bg-white mb-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium">Diploma Name</label>
                                <input
                                    type="text"
                                    value={diploma.name}
                                    onChange={(e) =>
                                        handleLocalDiplomaChange(index, "name", e.target.value)
                                    }
                                    className="w-full border rounded-md p-2 mt-1"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Institution</label>
                                <input
                                    type="text"
                                    value={diploma.institution}
                                    onChange={(e) =>
                                        handleLocalDiplomaChange(index, "institution", e.target.value)
                                    }
                                    className="w-full border rounded-md p-2 mt-1"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Year</label>
                                <input
                                    type="text"
                                    value={diploma.year}
                                    onChange={(e) =>
                                        handleLocalDiplomaChange(index, "year", e.target.value)
                                    }
                                    className="w-full border rounded-md p-2 mt-1"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="text-sm font-medium">Description</label>
                                <textarea
                                    rows="2"
                                    value={diploma.description}
                                    onChange={(e) =>
                                        handleLocalDiplomaChange(index, "description", e.target.value)
                                    }
                                    className="w-full border rounded-md p-2 mt-1"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="text-sm font-medium">Upload Diploma Image</label>
                                <input
                                    type="file"
                                    onChange={(e) =>
                                        handleLocalDiplomaChange(index, "image", e.target.files[0])
                                    }
                                    className="w-full border rounded-md p-2 mt-1"
                                />
                                {diploma.image && typeof diploma.image === "object" && (
                                    <img
                                        src={URL.createObjectURL(diploma.image)}
                                        alt="Diploma Preview"
                                        className="w-32 h-auto mt-2"
                                    />
                                )}

                                {diploma.image && typeof diploma.image === "string" && (
                                    <img
                                        src={`${BASE_URL}${diploma.image}`}
                                        alt="Diploma"
                                        className="w-32 h-auto mt-2"
                                    />
                                )}

                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() => handleUploadDiploma(diploma, index)}
                                className="bg-green-100 hover:bg-green-200 text-green-700 font-medium py-1 px-3 rounded-md text-sm"
                            >
                                Upload
                            </button>

                            <button
                                type="button"
                                onClick={() => handleDeleteDiploma(diploma.id)}
                                className="bg-red-100 hover:bg-red-200 text-red-600 font-medium py-1 px-3 rounded-md text-sm"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}

                <button
                    type="button"
                    onClick={handleAddLocalDiploma}
                    className="bg-orange-100 hover:bg-orange-200 text-orange-600 font-medium py-1 px-3 rounded-md text-sm"
                >
                    + Add New Diploma/Certification
                </button>
            </section>
            <button
                onClick={() => setShowPreviewModal(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md"
            >
                👁️ Voir le Profil
            </button>


            <button
                onClick={handleSaveProfile}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md"
            >
                Save Changes
            </button>
            {showPreviewModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
                        {/* Header */}
                        <div className="flex justify-between items-center p-5 border-b">
                            <h2 className="text-xl font-bold text-gray-900">Aperçu du Profil</h2>
                            <button
                                onClick={() => setShowPreviewModal(false)}
                                className="text-gray-400 hover:text-gray-600 text-xl"
                            >
                                ✖
                            </button>
                        </div>

                        {/* Contenu */}
                        <div className="p-6 space-y-6">
                            {/* Photo + Nom */}
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                {photo && (
                                    <img
                                        src={typeof photo === 'string' ? `${BASE_URL}${photo}` : URL.createObjectURL(photo)}
                                        alt="Profile"
                                        className="w-32 h-32 rounded-full object-cover border-2 border-red-500 shadow-md"
                                    />
                                )}
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900">{fullName}</h3>
                                    <p className="text-sm text-gray-600">{email}</p>
                                    <p className="text-sm text-gray-600">{phone}</p>
                                    {linkedin && (
                                        <a
                                            href={linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline text-sm mt-2 block"
                                        >
                                            🔗 Voir le profil LinkedIn
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Biographie & Compétences */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-lg font-semibold mb-1 text-gray-800">📝 Biographie</h4>
                                    <p className="text-sm text-gray-700 whitespace-pre-line">{bio || "Non renseignée."}</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-1 text-gray-800">🧠 Compétences</h4>
                                    <p className="text-sm text-gray-700 whitespace-pre-line">{skills || "Non renseignées."}</p>
                                </div>
                            </div>

                            {/* Vidéo de présentation */}
                            {introVideo && (
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-2">🎥 Vidéo de présentation</h4>
                                    <video controls className="w-full max-h-[400px] rounded-lg border">
                                        <source
                                            src={typeof introVideo === 'string' ? `${BASE_URL}${introVideo}` : URL.createObjectURL(introVideo)}
                                            type="video/mp4"
                                        />
                                        Votre navigateur ne prend pas en charge cette vidéo.
                                    </video>
                                </div>
                            )}

                            {/* Diplômes */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">🎓 Diplômes & Certifications</h4>
                                {diplomas.length === 0 ? (
                                    <p className="text-sm text-gray-500">Aucun diplôme ajouté.</p>
                                ) : (
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {diplomas.map((diploma, i) => (
                                            <div key={i} className="border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition shadow-sm">
                                                {diploma.image && (
                                                    <img
                                                        src={typeof diploma.image === 'string' ? `${BASE_URL}${diploma.image}` : URL.createObjectURL(diploma.image)}
                                                        alt="Diploma"
                                                        className="w-full h-32 object-cover rounded-md mb-3 shadow"
                                                    />
                                                )}
                                                <h5 className="font-semibold text-gray-800">{diploma.name}</h5>
                                                <p className="text-sm text-gray-600">{diploma.institution} • {diploma.year}</p>
                                                <p className="text-sm text-gray-700 mt-1">{diploma.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-end p-4 border-t">
                            <button
                                onClick={() => setShowPreviewModal(false)}
                                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm text-gray-700 font-medium"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
