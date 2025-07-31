const ServiceFilters = () => {
    const filters = [
        { label: 'Category', options: ['Tax', 'Investment', 'Accounting'] },
        { label: 'Price Range', options: ['$100–$200', '$200–$500'] },
        { label: 'Location', options: ['Remote', 'Local'] },
        { label: 'Rating', options: ['4+', '5 stars'] },
    ];

    return (
        <div className="flex flex-wrap gap-4 mb-10">
            {filters.map((filter, index) => (
                <select
                    key={index}
                    className="border rounded px-3 py-2 text-sm text-gray-700"
                >
                    <option>{filter.label}</option>
                    {filter.options.map((opt, i) => (
                        <option key={i}>{opt}</option>
                    ))}
                </select>
            ))}
        </div>
    );
};

export default ServiceFilters;
