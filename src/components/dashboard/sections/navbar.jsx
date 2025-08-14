import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Menu, X } from 'lucide-react';
import useUserStore from '../../../stores/userStore';

const Navbar = () => {
    const { isAuthenticated, role, logout } = useUserStore();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const { rehydrateUser } = useUserStore();

    useEffect(() => {
        rehydrateUser();
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-white shadow px-4 py-3">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex items-center gap-2 text-red-500 font-bold text-lg">
                    <Box size={24} />
                    <Link to="/">FREE-FIN</Link>
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                    <li><Link to="/findexpert" className="hover:text-red-500">Find Experts</Link></li>
                    <li><Link to="/explain" className="hover:text-red-500">How it Works</Link></li>
                    <li><Link to="/about" className="hover:text-red-500">About Us</Link></li>
                    <li><Link to="/service" className="hover:text-red-500">Services</Link></li>
                    {isAuthenticated && role === 'client' && (
                        <li><Link to="/dashclient" className="hover:text-red-500">Dashboard</Link></li>
                    )}
                    {isAuthenticated && role === 'freelance' && (
                        <li><Link to="/dashfreelance" className="hover:text-red-500">Dashboard</Link></li>
                    )}
                </ul>

                {/* Auth Buttons (Desktop) */}
                <div className="hidden md:flex gap-4">
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

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-3 px-2 space-y-3 animate-fade-in-down">
                    <ul className="flex flex-col gap-2 text-gray-700 font-medium">
                        <li><Link to="/findexpert" onClick={() => setMenuOpen(false)}>Find Experts</Link></li>
                        <li><Link to="/explain" onClick={() => setMenuOpen(false)}>How it Works</Link></li>
                        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                        <li><Link to="/service" onClick={() => setMenuOpen(false)}>Services</Link></li>
                        {isAuthenticated && role === 'client' && (
                            <li><Link to="/dashclient" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
                        )}
                        {isAuthenticated && role === "freelance" && (
                            <li><Link to="/dashfreelance" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
                        )}
                    </ul>
                    <div className="flex flex-col gap-2 pt-4 border-t">
                        {isAuthenticated ? (
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setMenuOpen(false);
                                }}
                                className="text-sm text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-50 transition"
                            >
                                Logout
                            </button>
                        ) : (
                            <>
                                <Link to="/login" onClick={() => setMenuOpen(false)}>
                                    <button className="text-sm text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-50 transition w-full">
                                        Log In
                                    </button>
                                </Link>
                                <Link to="/register" onClick={() => setMenuOpen(false)}>
                                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm transition w-full">
                                        Sign Up
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
