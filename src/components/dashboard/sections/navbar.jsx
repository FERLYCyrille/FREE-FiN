import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from 'lucide-react';
import useUserStore from '../../../stores/userStore'



const Navbar = () => {
    const { isAuthenticated, role, logout } = useUserStore();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/login'); // redirige après déconnexion si tu veux
    };
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
            {/* Logo */}
            <div className="text-xl font-bold text-red-500">
                <div className="flex items-center justify-center h-12 md:h-16 border-b md:border-b-0  border-gray-200 px-4 font-bold text-red-500 space-x-2 md:space-x-2 flex-1 md:flex-none">
                    <Box size={24} />
                    <span className="text-sm md:text-base"> <Link to="/" >FREE-FIN </Link> </span>
                </div>
            </div>

            {/* Navigation Links */}
            <ul className="flex gap-6 text-gray-700 font-medium">
                <li><Link to="/findexpert">Find Experts</Link></li>
                <li><Link to="/explain">How it Works</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/service">Services</Link></li>
                {isAuthenticated && role === 'client' && (
                    <li><Link to="/dashclient">Dashboard</Link></li>

                )}
            </ul>

            {/* Auth Buttons */}
            <div className="flex gap-4">
                {isAuthenticated ? (
                    <button
                        onClick={handleLogout}
                        className="text-sm text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-50 transition"
                    >
                        Logout
                    </button>
                ) : (
                    <>
                        <Link to="/login">
                            <button className="text-sm text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-50 transition">
                                Log In
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm transition">
                                Sign Up
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
