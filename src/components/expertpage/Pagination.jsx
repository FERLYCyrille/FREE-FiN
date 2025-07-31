export default function Pagination() {
    return (
        <div className="flex justify-center mt-8 gap-2">
            <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-100">&lt;</button>
            {[1, 2, 3, '...', 10].map((page, i) => (
                <button
                    key={i}
                    className={`px-3 py-1 border rounded ${page === 1 ? 'bg-red-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                    {page}
                </button>
            ))}
            <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-100">&gt;</button>
        </div>
    )
}