import React, { useEffect, useState } from "react";
import { getMyMissions } from "../../stores/missionStore"; // adapte le chemin si besoin

const DashboardContent = () => {
    const [missions, setMissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getMyMissions()
            .then(data => {
                setMissions(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Erreur lors du chargement des missions.");
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex-1 p-4 md:p-8">
            <h1 className="text-xl md:text-2xl font-bold mb-6">Welcome back, John Doe!</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded shadow p-4">
                    <h3 className="text-gray-600 mb-2 text-sm md:text-base">Pending Requests</h3>
                    <p className="text-xl md:text-2xl font-bold">
                        {missions.filter(m => m.status === "pending").length}
                    </p>
                </div>
                <div className="bg-white rounded shadow p-4">
                    <h3 className="text-gray-600 mb-2 text-sm md:text-base">Active Services</h3>
                    <p className="text-xl md:text-2xl font-bold">5</p> {/* A adapter si tu veux dynamiser */}
                </div>
                <div className="bg-white rounded shadow p-4">
                    <h3 className="text-gray-600 mb-2 text-sm md:text-base">Total Earnings</h3>
                    <p className="text-xl md:text-2xl font-bold">$12,450</p> {/* Aussi à dynamiser */}
                </div>
            </div>

            <div className="bg-white rounded shadow p-4 mb-8 overflow-x-auto">
                <h3 className="text-lg font-semibold mb-4">Client Requests</h3>

                {loading && <p>Chargement...</p>}
                {error && <p className="text-red-500">{error}</p>}

                {!loading && !error && (
                    <table className="min-w-full">
                        <thead>
                            <tr className="border-b text-left">
                                <th className="py-2 text-sm md:text-base">Client Name</th>
                                <th className="text-sm md:text-base">Service</th>
                                <th className="text-sm md:text-base">Date</th>
                                <th className="text-sm md:text-base">Status</th>
                                <th className="text-sm md:text-base">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {missions.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="py-4 text-center text-gray-500">
                                        Aucune mission trouvée.
                                    </td>
                                </tr>
                            )}
                            {missions.map((mission) => (
                                <tr key={mission.id} className="border-b">
                                    <td className="py-2 text-sm md:text-base">{mission.client_name || "N/A"}</td>
                                    <td className="text-sm md:text-base">{mission.service?.title || "N/A"}</td>
                                    <td className="text-sm md:text-base">
                                        {new Date(mission.date).toLocaleDateString()}
                                    </td>
                                    <td>
                                        <span
                                            className={`px-2 py-1 rounded text-xs md:text-sm ${mission.status === "pending"
                                                ? "bg-yellow-200 text-yellow-800"
                                                : mission.status === "completed"
                                                    ? "bg-green-200 text-green-800"
                                                    : "bg-gray-200 text-gray-800"
                                                }`}
                                        >
                                            {mission.status || "Unknown"}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="bg-orange-500 text-white px-3 py-1 rounded text-xs md:text-sm">
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Le reste du dashboard ... */}
        </div>
    );
};

export default DashboardContent;
