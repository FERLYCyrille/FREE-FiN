export default function FilterBar({ categories = [], onCategoryChange }) {
    return (
        <div className="flex flex-wrap gap-4 mb-10">
            <select
                className="border rounded px-3 py-2 text-sm text-gray-700"
                onChange={e => {
                    const val = e.target.value;
                    onCategoryChange(val === '' ? '' : val);
                }}
                defaultValue=""  // sélection par défaut sur la placeholder
            >
                <option value="">Category</option>
                {categories.map((cat, i) => (
                    <option key={i} value={cat.key}>
                        {cat.label}
                    </option>
                ))}

            </select>
            {/* Tu peux ajouter d’autres filtres ici si besoin */}
        </div>
    );
}
