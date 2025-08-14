import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getServiceBySlug } from '../../stores/servicesStore';
import Navbar from "../dashboard/sections/navbar";
import Footer from "../dashboard/sections/footer";
import { useNavigate } from 'react-router-dom';



export default function ServiceDetail() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getServiceBySlug(slug)
            .then(data => {
                setService(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Erreur lors du chargement du service");
                setLoading(false);
            });
    }, [slug]);

    if (loading) return <p className="text-center mt-10">Chargement...</p>;
    if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
    if (!service) return <p className="text-center mt-10">Service non trouvé</p>;

    return (
        <>
            <Navbar />
            <main className="max-w-6xl mx-auto p-6">
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 flex flex-col gap-10">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <h1 className="text-4xl font-extrabold text-gray-900">{service.title}</h1>
                        <button
                            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold text-lg w-full md:w-auto"
                            onClick={() => navigate(`/services/${slug}/souscrire`)}
                        >
                            Souscrire
                        </button>
                    </div>

                    {service.cover_image && (
                        <img
                            src={service.cover_image}
                            alt={service.title}
                            className="w-full h-72 object-cover rounded-lg shadow-md"
                        />
                    )}

                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="flex-1 space-y-6">
                            <section>
                                <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2 mb-2">Description</h2>
                                <p className="text-gray-700 whitespace-pre-line">{service.description}</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2 mb-2">Détails du service</h2>
                                <div className="flex justify-between gap-6">
                                    {/* Colonne 1 : infos générales */}
                                    <ul className="text-gray-700 space-y-2 flex-1">
                                        <li><strong>Catégorie :</strong> {service.category}</li>
                                        <li><strong>Prix :</strong> {service.pricing_model}</li>
                                        <li><strong>Délais de livraison :</strong> {service.delivery_time}</li>
                                    </ul>

                                    {/* Colonne 2 : documents nécessaires */}
                                    <div className="flex-1">
                                        <h3 className="font-semibold mb-1">Documents nécessaires :</h3>
                                        <pre className="whitespace-pre-wrap p-3 rounded text-gray-700">{service.client_documents_needed}</pre>
                                        {service.optional_document && (
                                            <p className="mt-3"><strong>Document optionnel :</strong> {service.optional_document}</p>
                                        )}
                                    </div>
                                </div>
                            </section>

                        </div>

                        <aside className="w-full md:w-1/3 space-y-4">
                            <div>
                                <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2 mb-2">Freelance</h2>
                                <p className="text-gray-700">
                                    <strong> 👤 Proposé par : {service.profile?.full_name || `Utilisateur #${service.user}`}</strong>
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
