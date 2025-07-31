import React from 'react';

const testimonials = [
    {
        name: 'Samantha Green',
        text: 'FinanceConnect made finding an advisor incredibly easy. Within days we had expert help for our taxes and a financial plan. Highly recommend!',
    },
    {
        name: 'James Cole',
        text: 'I was struggling with my personal taxes. I found an advisor on FinanceConnect, and it was simple, affordable, and fast. Never going back to doing it alone!',
    },
    {
        name: 'Anna Joseph',
        text: 'Emily helped me set bookkeeping processes. The platform is smooth, and the experts are top-notch. A great experience all around.',
    },
];

const Testimonials = () => {
    return (
        <section className="py-12 px-4 bg-white text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">What Our Clients Say</h2>
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
