import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProfileStore from "../../stores/profileStore";
import { getServicesByUserId } from "../../stores/servicesStore";
import Navbar from "../dashboard/sections/navbar";
import Footer from "../dashboard/sections/footer";
import { useNavigate } from "react-router-dom";

export default function FreelanceProfile() {
    const { slug } = useParams();
    const { selectedUserProfile, loadProfileBySlug, loading, error } = useProfileStore();
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadProfileBySlug(slug); // charge le profil via le slug de l'URL
    }, [slug, loadProfileBySlug]);

    useEffect(() => {
        if (selectedUserProfile?.user) {
            getServicesByUserId(selectedUserProfile.user)
                .then(setServices)
                .catch(console.error);
        }
    }, [selectedUserProfile]);



    if (loading) return <p className="text-center py-10 text-gray-500">⏳ Chargement...</p>;
    if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

    if (!selectedUserProfile) return null;

    // Format skills en liste (split par retour ligne, trim)
    const skillsList = selectedUserProfile.skills
        ? selectedUserProfile.skills.split(/\r?\n/).map(s => s.trim()).filter(Boolean)
        : [];

    return (
        <>
            <Navbar />
            <div className="max-w-5xl mx-auto p-6 space-y-12">
                {/* Profil */}
                <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center">
                    <img
                        src={selectedUserProfile.photo}
                        alt={selectedUserProfile.full_name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-md mb-4"
                    />
                    <h1 className="text-3xl font-bold text-gray-900">{selectedUserProfile.full_name}</h1>

                    <p className="text-gray-600 mt-2 whitespace-pre-line">{selectedUserProfile.bio}</p>

                    <div className="mt-4 flex flex-col sm:flex-row sm:justify-center gap-6 text-gray-700">
                        {selectedUserProfile.email && (
                            <a href={`mailto:${selectedUserProfile.email}`} className="underline hover:text-indigo-600">
                                ✉️ {selectedUserProfile.email}
                            </a>
                        )}
                        {selectedUserProfile.phone && (
                            <a href={`tel:${selectedUserProfile.phone}`} className="underline hover:text-indigo-600">
                                📞 {selectedUserProfile.phone}
                            </a>
                        )}
                        {selectedUserProfile.city && <span>📍 {selectedUserProfile.city}</span>}
                        {selectedUserProfile.country && <span>🌍 {selectedUserProfile.country}</span>}
                    </div>

                    {selectedUserProfile.linkedin_url && (
                        <a
                            href={selectedUserProfile.linkedin_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-6 px-6 py-2 bg-red-200 text-indigo-700 rounded-full hover:bg-red-300 transition"
                        >
                            🔗 Voir LinkedIn
                        </a>
                    )}
                </div>

                {/* Skills */}
                {skillsList.length > 0 && (
                    <section className="bg-white shadow-md rounded-xl p-6">
                        <h2 className="text-2xl font-semibold mb-4">💡 Compétences</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {skillsList.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Diplômes */}
                {selectedUserProfile.diplomas && selectedUserProfile.diplomas.length > 0 && (
                    <section className="bg-white shadow-md rounded-xl p-6">
                        <h2 className="text-2xl font-semibold mb-6">🎓 Diplômes</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {selectedUserProfile.diplomas.map((dip) => (
                                <div
                                    key={dip.id}
                                    className="border rounded-lg p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
                                >
                                    {dip.image && (
                                        <img
                                            src={dip.image}
                                            alt={dip.name}
                                            className="w-28 h-28 object-cover rounded-md mb-3"
                                        />
                                    )}
                                    <h3 className="font-bold text-lg">{dip.name}</h3>
                                    <p className="text-sm text-gray-600">{dip.institution}</p>
                                    <p className="text-xs text-gray-500">{dip.year}</p>
                                    {dip.description && <p className="mt-2 text-gray-700">{dip.description}</p>}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Services */}
                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">💼 Services proposés</h2>
                    {services.length === 0 ? (
                        <p className="text-gray-500 text-center">Aucun service proposé pour le moment.</p>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    onClick={() => navigate(`/services/${service.slug}`)}
                                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col cursor-pointer"
                                >
                                    <img
                                        src={service.cover_image}
                                        alt={service.title}
                                        className="w-full h-40 object-cover rounded-lg mb-4"
                                    />
                                    <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                                    <p className="text-gray-600 text-sm mt-1 flex-1">{service.description}</p>
                                    <p className="text-xs text-gray-500 mt-3">📂 Catégorie : {service.category}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
            <Footer />
        </>
    );
}
