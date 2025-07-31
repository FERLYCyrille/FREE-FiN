// src/dashboard/sections/Sidebar.js
import { ClipboardList, Search, User, Box, LogOut } from 'lucide-react';

export default function Sidebar({ selectedMenu, setSelectedMenu, onLogout }) {
    const menuItems = [
        { key: 'dashboard', label: 'Tableau de bord', icon: <ClipboardList size={20} /> },
        { key: 'projects', label: 'Mes Projets', icon: <Box size={20} /> },
        { key: 'search', label: 'Rechercher un Freelance', icon: <Search size={20} /> },
        { key: 'profile', label: 'Profil', icon: <User size={20} /> },
    ];

    return (
        <aside className="w-full md:w-64  border-b md:border-b-0 md:border-r border-gray-200 flex flex-row md:flex-col mt-3">
            <nav className="flex flex-row md:flex-col flex-1 px-2 py-2 md:py-4 space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-visible">
                {menuItems.map(({ key, label, icon }) => (
                    <button
                        key={key}
                        onClick={() => setSelectedMenu(key)}
                        className={`flex items-center gap-1 md:gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-red-100 focus:outline-none whitespace-nowrap
                            ${selectedMenu === key ? 'bg-red-100 font-semibold' : ''}`}
                    >
                        {icon}
                        <span className="hidden md:inline">{label}</span>
                    </button>
                ))}
            </nav>

            <button
                className="mt-auto mb-4 mx-4 flex items-center gap-2 text-gray-600 hover:text-red-600 whitespace-nowrap"
                onClick={onLogout}
            >
                <LogOut size={20} />
                <span className="hidden md:inline">Déconnexion</span>
            </button>
        </aside>
    );
}
