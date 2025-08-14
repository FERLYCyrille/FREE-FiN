import React, { useEffect, useState } from 'react';
import FilterBar from './FilterBar';
import ExpertCard from './ExpertCard';
import Pagination from './Pagination';
import Navbar from '../dashboard/sections/navbar';
import Footer from '../dashboard/sections/footer';
import useProfileStore from '../../stores/profileStore';
import { fetchCategories } from '../../stores/servicesStore'; // juste la fonction

export default function ExpertsPage() {
    const { profiles, loading, error, loadProfiles } = useProfileStore();

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        loadProfiles();

        const loadCategories = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
            } catch (err) {
                console.error("Erreur chargement catégories", err);
            }
        };
        loadCategories();
    }, [loadProfiles]);

    const filteredProfiles = selectedCategory
        ? profiles.filter(profile => profile.category === selectedCategory)
        : profiles;

    return (
        <>
            <Navbar />
            <div className="p-6 ">
                <FilterBar
                    categories={categories}
                    onCategoryChange={setSelectedCategory}
                />

                {loading && <p>Chargement des experts...</p>}
                {error && <p className="text-red-600">Erreur : {error}</p>}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {!loading && !error && filteredProfiles.length === 0 && (
                        <p>Aucun expert trouvé.</p>
                    )}

                    {!loading && !error && filteredProfiles.map(profile => (
                        <ExpertCard
                            key={profile.id}
                            slug={profile.slug}
                            name={`${profile.full_name}`}
                            title={profile.profession || profile.title || 'Expert'}
                            rating={profile.rating || 4.5}
                            reviews={profile.reviews || 0}
                            description={profile.bio || profile.description || 'Pas de description'}
                            img={profile.photo || ''}
                        />
                    ))}
                </div>

                <Pagination />
            </div>
            <Footer />
        </>
    );
}
