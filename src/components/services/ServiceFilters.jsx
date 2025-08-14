import { useEffect, useState } from 'react';
import { fetchCategories } from '../../stores/servicesStore';

const ServiceFilters = ({ onCategoryChange }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
            } catch (error) {
                console.error("Erreur lors du chargement des catégories :", error);
            }
        };
        loadCategories();
    }, []);

    return (
        <div className="flex flex-wrap gap-4 mb-10">
            <select
                className="border rounded px-3 py-2 text-sm text-gray-700"
                onChange={(e) => onCategoryChange(e.target.value)}
            >
                <option value="">Toutes les catégories</option>
                {categories.map((cat) => (
                    <option key={cat.key} value={cat.key}>
                        {cat.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ServiceFilters;
