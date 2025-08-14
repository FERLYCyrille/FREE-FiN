import React from 'react';
import { CheckCircle, DollarSign, MessageSquare } from 'lucide-react';

const WhyChoose = () => {
    return (
        <section className="bg-red-100 py-12 text-center px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Pourquoi choisir FinanceConnect?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                    <CheckCircle className="mx-auto text-red-500" size={32} />
                    <p className="font-semibold mt-2">Verified Experts</p>
                    <p className="text-sm text-gray-700 mt-1">
                        Tous nos professionnels sont soigneusement sélectionnés, certifiés et soumis à un processus de vérification rigoureux. Vous bénéficiez de conseils fiables, assurés par des spécialistes reconnus dans leur domaine.
                    </p>
                </div>
                <div>
                    <MessageSquare className="mx-auto text-red-500" size={32} />
                    <p className="font-semibold mt-2">Personalized Matches</p>
                    <p className="text-sm text-gray-700 mt-1">
                        Grâce à notre algorithme intelligent, nous vous mettons en relation avec l’expert qui correspond parfaitement à vos besoins financiers, vos objectifs et votre situation personnelle. Fini les recherches interminables.
                    </p>
                </div>
                <div>
                    <DollarSign className="mx-auto text-red-500" size={32} />
                    <p className="font-semibold mt-2">Transparent Pricing</p>
                    <p className="text-sm text-gray-700 mt-1">
                        Vous savez toujours ce que vous payez. Aucun frais caché, aucune surprise. Nos tarifs sont clairement affichés, et les services sont détaillés pour vous permettre de faire un choix éclairé.
                    </p>
                </div>
                <div>
                    <MessageSquare className="mx-auto text-red-500" size={32} />
                    <p className="font-semibold mt-2">Seamless Communication</p>
                    <p className="text-sm text-gray-700 mt-1">
                        Notre plateforme vous permet d’échanger facilement et rapidement avec les experts, de poser vos questions, de planifier des rendez-vous et de suivre vos demandes en toute fluidité.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
