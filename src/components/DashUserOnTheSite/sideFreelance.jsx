import React from "react";
import { LayoutDashboard, Briefcase, CreditCard, Settings, LogOut } from "lucide-react";

const Sidebar = ({ selectedMenu, setSelectedMenu, onLogout }) => {
    const menuItems = [
        { key: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
        { key: "services", label: "My Services", icon: <Briefcase size={20} /> },
        { key: "payments", label: "Payments", icon: <CreditCard size={20} /> },
        { key: "settings", label: "Profile Settings", icon: <Settings size={20} /> },
    ];

    return (
        <aside className="w-full md:w-64  border-b md:border-b-0 md:border-r border-gray-200 flex flex-row md:flex-col mt-3">
            {/* Menu items */}
            <nav className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible px-2 py-2 md:py-4 gap-2 md:gap-0">
                {menuItems.map(({ key, label, icon }) => (
                    <button
                        key={key}
                        onClick={() => setSelectedMenu(key)}
                        className={`flex items-center md:items-start gap-1 md:gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-red-200 focus:outline-none whitespace-nowrap
                            ${selectedMenu === key ? "bg-red-200 font-semibold" : ""}`}
                    >
                        {icon}
                        <span className="hidden md:inline">{label}</span>
                    </button>
                ))}
            </nav>

            {/* Logout */}
            <div className="flex justify-end md:justify-start px-2 py-3 border-t md:border-t-0 md:mb-4">
                <button
                    onClick={onLogout}
                    className="flex items-center gap-2 text-gray-600 hover:text-red-600 whitespace-nowrap"
                >
                    <LogOut size={20} />
                    <span className="hidden md:inline">Log out</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
