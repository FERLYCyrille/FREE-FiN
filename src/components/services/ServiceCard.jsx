import { Star } from 'lucide-react';

const ServiceCard = ({ title, author, description, rating, price }) => {
    return (
        <div className="border rounded-lg shadow-sm hover:shadow-md p-6 flex flex-col justify-between">
            <div>
                <h3 className="text-lg font-bold mb-1">{title}</h3>
                <p className="text-sm text-gray-600 mb-2">By {author}</p>
                <p className="text-sm text-gray-600 mb-4">{description}</p>
            </div>
            <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4" />
                    {rating}
                </div>
                <div className="font-semibold text-gray-800">{price}</div>
            </div>
            <div className="mt-4 flex gap-2">
                <button className="text-red-500 text-sm hover:underline">View Details</button>
                <button className="bg-red-500 text-white text-sm px-4 py-1 rounded hover:bg-red-600">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
