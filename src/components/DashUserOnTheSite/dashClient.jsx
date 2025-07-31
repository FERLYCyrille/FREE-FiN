import { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import Navbar from '../dashboard/sections/navbar';
import Sidebar from './sidebarClient'; // <== nouveau composant

// ... ton tableau projectsData reste inchangé

export default function DashboardClient() {
    const [selectedMenu, setSelectedMenu] = useState('dashboard');

    const handleLogout = () => {
        alert('Déconnexion');
        // ici tu peux gérer la déconnexion réelle plus tard
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row h-screen">
                <Sidebar
                    selectedMenu={selectedMenu}
                    setSelectedMenu={setSelectedMenu}
                    onLogout={handleLogout}
                />

                <main className="flex-1 p-4 md:p-8 overflow-auto">
                    {/* Greeting and stats */}
                    <h1 className="text-xl md:text-2xl font-semibold mb-6">Bonjour Jean !</h1>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <StatCard number={3} label="Projets en cours" color="text-red-600" />
                        <StatCard number={1} label="Projets en attente" color="text-orange-500" />
                        <StatCard number={7} label="Projets terminés" color="text-green-600" />
                    </div>

                    {/* Mes Projets Header */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                        <h2 className="font-semibold text-lg">Mes Projets</h2>
                        <button
                            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 flex items-center gap-2 whitespace-nowrap"
                            onClick={() => alert('Créer un nouveau projet')}
                        >
                            <PlusCircle size={20} />
                            Nouveau projet
                        </button>
                    </div>

                    {/* Projects Table */}
                    {/* ...table inchangée */}
                </main>
            </div>
        </>
    );
}

function StatCard({ number, label, color }) {
    return (
        <div className="bg-white rounded-md shadow px-4 py-3 min-w-[140px] flex flex-col items-center">
            <p className={`text-2xl sm:text-3xl font-bold ${color}`}>{number}</p>
            <p className="text-gray-400 text-sm text-center">{label}</p>
        </div>
    );
}
