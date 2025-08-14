import React, { useState, useEffect } from "react";
import {
    createService,
    getMyServices,
    deleteService,
    updateService,
} from "../../stores/servicesStore"; // adapte le chemin si besoin

const MyServices = () => {
    const [tab, setTab] = useState("create"); // 'create' ou 'list'
    const [myServices, setMyServices] = useState([]);

    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        pricing_model: "",
        delivery_time: "",
        client_documents_needed: "",
        optional_document: null,
        cover_image: null,
    });

    useEffect(() => {
        if (tab === "list") {
            fetchMyServices();
        }
    }, [tab]);

    const fetchMyServices = async () => {
        try {
            const services = await getMyServices();
            setMyServices(services);
        } catch (error) {
            console.error("Erreur lors du chargement des services :", error);
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData((prev) => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await updateService(editingId, formData);
                alert("Service mis à jour avec succès !");
            } else {
                await createService(formData);
                alert("Service publié avec succès !");
            }

            setFormData({
                title: "",
                category: "",
                description: "",
                pricing_model: "",
                delivery_time: "",
                client_documents_needed: "",
                optional_document: null,
                cover_image: null,
            });
            setIsEditing(false);
            setEditingId(null);
            fetchMyServices();
            setTab("list");
        } catch (error) {
            console.error(error);
            alert("Erreur lors de l'envoi du service.");
        }
    };

    const handleEdit = (service) => {
        setTab("create");
        setIsEditing(true);
        setEditingId(service.id);
        setFormData({
            title: service.title || "",
            category: service.category || "",
            description: service.description || "",
            pricing_model: service.pricing_model || "",
            delivery_time: service.delivery_time || "",
            client_documents_needed: service.client_documents_needed || "",
            optional_document: null,
            cover_image: null,
        });
    };

    const handleDelete = async (id) => {
        if (window.confirm("Voulez-vous vraiment supprimer ce service ?")) {
            try {
                await deleteService(id);
                fetchMyServices();
                alert("Service supprimé !");
            } catch (error) {
                console.error(error);
                alert("Erreur lors de la suppression.");
            }
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            {/* Onglets */}
            <div className="flex justify-between space-x-4 mb-6 mt-4 pt-4">
                <button
                    onClick={() => {
                        setTab("create");
                        setIsEditing(false);
                        setEditingId(null);
                    }}
                    className={`py-2 px-4 rounded font-semibold ${tab === "create"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-800"
                        }`}
                >
                    Ajouter un service
                </button>
                <button
                    onClick={() => setTab("list")}
                    className={`py-2 px-4 rounded font-semibold ${tab === "list"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-800"
                        }`}
                >
                    Voir mes services
                </button>
            </div>

            {/* Formulaire d’ajout/modification */}
            {tab === "create" && (
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    encType="multipart/form-data"
                >
                    <h1 className="text-2xl font-bold">
                        {isEditing ? "Modifier un service" : "Ajouter un nouveau service"}
                    </h1>

                    <div className="p-6 bg-white rounded-md shadow">
                        <label className="block mb-2">
                            Titre
                            <input
                                name="title"
                                type="text"
                                className="w-full p-2 border rounded"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="block mb-2">
                            Catégorie
                            <select
                                name="category"
                                className="w-full p-2 border rounded"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choisir une catégorie</option>
                                <option value="Accounting">Comptabilité générale</option>
                                <option value="Bookkeeping">Tenue de livres</option>
                                <option value="Taxation">Déclarations fiscales</option>
                                <option value="Payroll">Gestion de la paie</option>
                                <option value="FinancialPlanning">Planification financière</option>
                                <option value="InvestmentAdvisory">Conseil en investissement</option>
                                <option value="Audit">Audit & contrôle</option>
                                <option value="Invoicing">Facturation & paiements</option>
                                <option value="FinancialAnalysis">Analyse financière</option>
                                <option value="CashFlow">Gestion de trésorerie</option>
                            </select>
                        </label>

                        <label className="block mb-2">
                            Description
                            <textarea
                                name="description"
                                className="w-full p-2 border rounded"
                                rows={4}
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>

                    <div className="p-6 bg-white rounded-md shadow">
                        <label className="block mb-2">
                            Modèle de tarification
                            <input
                                name="pricing_model"
                                type="text"
                                className="w-full p-2 border rounded"
                                value={formData.pricing_model}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className="block mb-2">
                            Délai de livraison estimé
                            <input
                                name="delivery_time"
                                type="text"
                                className="w-full p-2 border rounded"
                                value={formData.delivery_time}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>

                    <div className="p-6 bg-white rounded-md shadow">
                        <label className="block mb-2">
                            Documents requis du client
                            <textarea
                                name="client_documents_needed"
                                className="w-full p-2 border rounded"
                                rows={4}
                                value={formData.client_documents_needed}
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div className="p-6 bg-white rounded-md shadow">
                        <label className="block mb-4">
                            Document optionnel
                            <input
                                name="optional_document"
                                type="file"
                                className="w-full"
                                onChange={handleChange}
                            />
                        </label>
                        <label className="block mb-4">
                            Image de couverture
                            <input
                                name="cover_image"
                                type="file"
                                className="w-full"
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
                    >
                        {isEditing ? "Mettre à jour" : "Publier le service"}
                    </button>

                    {isEditing && (
                        <button
                            type="button"
                            onClick={() => {
                                setIsEditing(false);
                                setEditingId(null);
                                setFormData({
                                    title: "",
                                    category: "",
                                    description: "",
                                    pricing_model: "",
                                    delivery_time: "",
                                    client_documents_needed: "",
                                    optional_document: null,
                                    cover_image: null,
                                });
                            }}
                            className="ml-4 text-gray-600 hover:underline"
                        >
                            Annuler
                        </button>
                    )}
                </form>
            )}

            {/* Liste des services */}
            {tab === "list" && (
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold mb-4">Mes services publiés</h1>
                    {myServices.length === 0 ? (
                        <p>Aucun service trouvé.</p>
                    ) : (
                        myServices.map((service) => (
                            <div key={service.id} className="p-4 border rounded bg-white shadow space-y-2">
                                {service.cover_image && (
                                    <img
                                        src={service.cover_image}
                                        alt="Image de couverture"
                                        className="w-full h-48 object-cover rounded"
                                    />
                                )}
                                <h3 className="text-lg font-semibold">{service.title}</h3>
                                <p className="text-sm text-gray-600">{service.category}</p>
                                <p>{service.description}</p>
                                <p className="text-sm text-gray-500">
                                    Tarif : {service.pricing_model} — Délai : {service.delivery_time}
                                </p>
                                <div className=" flex justify-between">
                                    <div className="flex gap-4 mt-2">
                                        <button
                                            onClick={() => handleEdit(service)}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Modifier
                                        </button>
                                        <button
                                            onClick={() => handleDelete(service.id)}
                                            className="text-red-600 hover:underline"
                                        >
                                            Supprimer
                                        </button>
                                    </div>
                                    <button className="bg-red-500 text-white text-sm px-4 py-1 rounded hover:bg-red-600"> {service.pricing_model} — Délai : {service.delivery_time}</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default MyServices;
