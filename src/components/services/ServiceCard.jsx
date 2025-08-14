import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ id, slug, title, author, description, rating, price, img }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/services/${slug}`)}
            className="border rounded-lg shadow-sm hover:shadow-md p-6 flex flex-col justify-between bg-white cursor-pointer transition"
        >
            <div>
                {/* Image */}
                {img && (
                    <img
                        src={img}
                        alt={title}
                        className="w-full h-40 object-cover rounded-md mb-4"
                    />
                )}

                {/* Titre & Auteur */}
                <h3 className="text-lg font-bold mb-1">{title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                    Par {author || "Freelance"}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {description}
                </p>
            </div>

            {/* Rating & Prix */}
            <div className="flex justify-between items-center text-sm mt-auto">
                <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4" />
                    {rating || "—"}
                </div>
                <div className="font-semibold text-gray-800">
                    {price || "Prix non défini"}
                </div>
            </div>

            {/* Actions */}
            <div className="mt-4 flex gap-2">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/services/${slug}`);
                    }}
                    className="text-red-500 text-sm hover:underline"
                >
                    Voir les détails
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        alert("Fonction de réservation à implémenter");
                    }}
                    className="bg-red-500 text-white text-sm px-4 py-1 rounded hover:bg-red-600"
                >
                    Réserver
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
