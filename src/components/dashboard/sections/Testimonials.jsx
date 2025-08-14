import React from 'react';

const testimonials = [
    {
        name: 'Samantha Green',
        text: 'FinanceConnect a rendu la recherche d’un conseiller incroyablement facile. En quelques jours, nous avions de l’aide pour nos impôts et un vrai plan financier. Je recommande vivement !',
    },
    {
        name: 'James Cole',
        text: 'J’avais du mal avec mes impôts personnels. J’ai trouvé un conseiller sur FinanceConnect : simple, abordable et rapide. Fini les galères tout seul !',
    },
    {
        name: 'Anna Joseph',
        text: 'Emily m’a aidée à mettre en place des processus de comptabilité. La plateforme est fluide et les experts sont vraiment qualifiés. Une excellente expérience du début à la fin.',
    },
];

const Testimonials = () => {
    return (
        <section className="py-12 px-4 bg-white text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Ce que disent nos clients</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, idx) => (
                    <div key={idx} className="p-6 border rounded shadow-sm bg-gray-50 text-left">
                        <p className="text-gray-700 italic">"{testimonial.text}"</p>
                        <p className="mt-4 font-semibold text-red-500">{testimonial.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
