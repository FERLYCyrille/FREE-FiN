import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getServiceBySlug } from '../../stores/servicesStore'; // ton fetch du service
import { createMission } from '../../stores/missionStore'; // à créer
import Navbar from '../dashboard/sections/navbar';
import Footer from '../dashboard/sections/footer';

export default function MissionForm() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        getServiceBySlug(slug)
            .then(data => {
                setService(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Erreur lors du chargement du service.");
                setLoading(false);
            });
    }, [slug]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        const formData = new FormData();
        formData.append('date', date);
        if (time) formData.append('time', time);
        formData.append('service', service.id);
        if (file) formData.append('file', file); // facultatif

        try {
            await createMission(formData); // à implémenter dans missionsStore
            navigate('/dashboard/missions'); // ou autre page de confirmation
        } catch (err) {
            setError("Erreur lors de la création de la mission.");
            setSubmitting(false);
        }
    };

    if (loading) return <p className="text-center mt-10">Chargement...</p>;
    if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

    return (
        <>
            <Navbar />
            <main className="max-w-3xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">Souscription au service : {service.title}</h1>

                <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow p-6 rounded border">
                    <div>
                        <label className="block font-semibold mb-1">Date de la mission *</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            className="w-full border rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Heure (facultatif)</label>
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full border rounded p-2"
                        />
                    </div>

                    {service.client_documents_needed && (
                        <div>
                            <label className="block font-semibold mb-1">Document (facultatif)</label>
                            <input
                                type="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                className="w-full border rounded p-2"
                            />
                            <p className="text-sm text-gray-600 mt-1">
                                Documents requis : {service.client_documents_needed}
                            </p>
                        </div>
                    )}

                    {error && <p className="text-red-500">{error}</p>}

                    <button
                        type="submit"
                        disabled={submitting}
                        className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                    >
                        {submitting ? "Souscription en cours..." : "Confirmer la mission"}
                    </button>
                </form>
            </main>
            <Footer />
        </>
    );
}
