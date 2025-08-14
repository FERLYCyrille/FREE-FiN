import { useEffect, useState } from 'react';
import Navbar from '../dashboard/sections/navbar';
import Footer from '../dashboard/sections/footer';
import ServiceSearchBar from './ServiceSearchBar';
import ServiceFilters from './ServiceFilters';
import ServiceCard from './ServiceCard';
import { fetchServices } from '../../stores/servicesStore'

const ExploreFinanceServicesPage = () => {
    const [services, setServices] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const loadServices = async () => {
            try {
                const data = await fetchServices();
                setServices(data);
                setFiltered(data);
            } catch (error) {
                console.error("Erreur lors du chargement des services :", error);
            }
        };
        loadServices();
    }, []);

    useEffect(() => {
        if (!selectedCategory) {
            setFiltered(services);
        } else {
            setFiltered(services.filter(service => service.category === selectedCategory));
        }
    }, [selectedCategory, services]);

    return (
        <>
            <Navbar />
            <section className="max-w-full mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Explore Finance Services</h2>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <ServiceSearchBar />
                    <ServiceFilters onCategoryChange={setSelectedCategory} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((service) => (
                        <ServiceCard
                            key={service.id}
                            id={service.id}
                            slug={service.slug}
                            title={service.title}
                            author={service.profile?.full_name}
                            description={service.description}
                            rating={service.rating}
                            price={service.pricing_model}
                            img={service.cover_image}
                        />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ExploreFinanceServicesPage;
