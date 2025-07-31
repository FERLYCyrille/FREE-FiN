import Navbar from '../dashboard/sections/navbar';
import ServiceSearchBar from './ServiceSearchBar';
import ServiceFilters from './ServiceFilters';
import ServiceCard from './ServiceCard';

const services = [
    {
        title: 'Tax Filing & Planning',
        author: 'Sarah Chen',
        description: 'Expert assistance with personal and small business tax preparation...',
        rating: '4.5 (120)',
        price: '$250/hr',
    },
    {
        title: 'Investment Portfolio Review',
        author: 'Michael Lee',
        description: 'Comprehensive analysis of your current investment portfolio...',
        rating: '5.0 (85)',
        price: '$300/session',
    },
    {
        title: 'Small Business Accounting',
        author: 'Emily White',
        description: 'Full-suite accounting services including payroll and reporting...',
        rating: '4.8 (95)',
        price: '$400/month',
    },
    {
        title: 'Retirement Planning',
        author: 'David Kim',
        description: 'Strategies for long-term financial security after retirement...',
        rating: '4.0 (66)',
        price: '$200/session',
    },
    {
        title: 'Estate Planning',
        author: 'Jessica Brown',
        description: 'Wills, trusts, and legacy protection with expert guidance...',
        rating: '4.7 (75)',
        price: '$350/session',
    },
    {
        title: 'Debt Management',
        author: 'Chris Green',
        description: 'Personalized plans to reduce debt and improve credit health...',
        rating: '4.2 (50)',
        price: '$180/hr',
    },
];

const ExploreFinanceServicesPage = () => {
    return (
        <>
            <Navbar />
            <section className="max-w-full mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Explore Finance Services</h2>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <ServiceSearchBar />
                    <ServiceFilters />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item, index) => (
                        <ServiceCard key={index} {...item} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default ExploreFinanceServicesPage;
