import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

export default function ExpertCard({ slug, name, title, rating, reviews, description, img }) {
    const navigate = useNavigate();

    return (
        <div className="bg-neutral-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <img src={img} alt={name} className="w-20 h-20 rounded-full mx-auto object-cover" />
            <h3 className="text-lg font-semibold text-center mt-4">{name}</h3>
            <p className="text-sm text-gray-500 text-center">{title}</p>
            <div className="flex items-center justify-center gap-1 mt-2 text-sm text-orange-500">
                <Star size={16} fill="currentColor" className="inline" />
                <span>{rating} ({reviews} reviews)</span>
            </div>
            <p className="text-gray-600 text-sm mt-3 text-center">{description}</p>
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => navigate(`/freelance/${slug}`)}
                    className="bg-red-100 text-red-600 text-sm font-medium py-2 px-4 rounded-md hover:bg-red-200"
                >
                    View Profile
                </button>
            </div>
        </div>
    );
}
