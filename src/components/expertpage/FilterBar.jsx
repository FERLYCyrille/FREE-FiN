export default function FilterBar() {
    return (
        <div className="bg-neutral-50 rounded-xl shadow p-6 flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0 md:space-x-6">

            {/* Specialty */}
            <div className="flex items-center space-x-2 w-full md:w-auto">
                <label className="text-sm font-medium text-gray-700">Specialty:</label>
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full md:w-auto">
                    <option>All</option>
                    <option>Accountant</option>
                    <option>Advisor</option>
                    <option>Consultant</option>
                </select>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2 w-full md:w-auto">
                <label className="text-sm font-medium text-gray-700">Rating:</label>
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full md:w-auto">
                    <option>Any</option>
                    <option>5.0</option>
                    <option>4.5+</option>
                    <option>4.0+</option>
                </select>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 w-full md:w-auto">
                <label className="text-sm font-medium text-gray-700">Location:</label>
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full md:w-auto">
                    <option>Any</option>
                    <option>Remote</option>
                    <option>Local</option>
                </select>
            </div>

            {/* Clear Filters */}
            <div className="md:ml-auto w-full md:w-auto text-right">
                <button className="text-sm text-gray-500 hover:text-gray-700 hover:underline">Clear Filters</button>
            </div>

        </div>
    );
}
