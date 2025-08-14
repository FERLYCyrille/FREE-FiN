import React from 'react';

const experts = [
    { name: 'Sarah Chen', title: 'Certified Public Accountant', location: 'New York, NY', image: 'https://randomuser.me/api/portraits/women/44.jpg', },
    { name: 'David Lee', title: 'Tax Advisor', location: 'Los Angeles, CA', image: 'https://randomuser.me/api/portraits/women/44.jpg', },
    { name: 'Emily White', title: 'Investment Consultant', location: 'Chicago, IL', image: 'https://randomuser.me/api/portraits/women/44.jpg', },
    { name: 'Michael Brown', title: 'Financial Analyst', location: 'San Francisco, CA', image: 'https://randomuser.me/api/portraits/women/44.jpg', },
];

const FeaturedExperts = () => {
    return (
        <section className="py-12 px-4 text-center">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Featured Finance Experts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {experts.map((expert, idx) => (
                    <div key={idx} className="bg-white p-6 rounded shadow text-left">
                        <img
                            src={expert.image}
                            alt={expert.name}
                            className="w-16 h-16 rounded-full mb-4 mx-auto object-cover"
                        />
                        <h3 className="font-semibold text-lg text-center">{expert.name}</h3>
                        <p className="text-sm text-gray-600 text-center">{expert.title}</p>
                        <p className="text-sm text-gray-500 text-center">{expert.location}</p>
                        <div className="text-center mt-4">
                            <button className="bg-red-500 text-white px-4 py-2 rounded text-sm">
                                View Profile
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedExperts;
