import React from 'react';
import { CheckCircle, DollarSign, MessageSquare } from 'lucide-react';

const WhyChoose = () => {
    return (
        <section className="bg-red-100 py-12 text-center px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Why Choose FinanceConnect?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                    <CheckCircle className="mx-auto text-red-500" size={32} />
                    <p className="font-semibold mt-2">Verified Experts</p>
                </div>
                <div>
                    <MessageSquare className="mx-auto text-red-500" size={32} />
                    <p className="font-semibold mt-2">Personalized Matches</p>
                </div>
                <div>
                    <DollarSign className="mx-auto text-red-500" size={32} />
                    <p className="font-semibold mt-2">Transparent Pricing</p>
                </div>
                <div>
                    <MessageSquare className="mx-auto text-red-500" size={32} />
                    <p className="font-semibold mt-2">Seamless Communication</p>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
