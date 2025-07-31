import { Search } from 'lucide-react';

const ServiceSearchBar = () => {
    return (
        <div className="flex items-center border rounded-lg px-4 py-2 w-full md:w-1/3 mb-6">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
            <input
                type="text"
                placeholder="Search services..."
                className="w-full outline-none text-sm"
            />
        </div>
    );
};

export default ServiceSearchBar;
