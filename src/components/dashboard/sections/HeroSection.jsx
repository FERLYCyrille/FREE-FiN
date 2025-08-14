import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from 'lucide-react';

const HeroSection = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="relative h-screen overflow-hidden bg-black">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10"></div>

            {/* Navbar */}
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8 bg-white/10 backdrop-blur-md rounded-b-lg">
                    <div className="text-xl font-bold text-red-500">
                        <div className="flex items-center justify-center h-12 md:h-16 border-b md:border-b-0  border-gray-200 px-4 font-bold text-red-500 space-x-2 md:space-x-2 flex-1 md:flex-none">
                            <Box size={24} />
                            <span className="text-sm md:text-base"> <Link to="/" >FREE-FIN </Link> </span>
                        </div>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex gap-x-8 items-center">
                        <Link to="/findexpert" className="text-white hover:text-indigo-300 transition">Find Experts</Link>
                        <Link to="/explain" className="text-white hover:text-indigo-300 transition">How it works</Link>
                        <Link to="/about" className="text-white hover:text-indigo-300 transition">About Us</Link>
                        <Link to="/service" className="text-white hover:text-indigo-300 transition">Services</Link>
                    </div>

                    {/* Desktop Login */}
                    <div className="hidden lg:block">
                        <Link to="/login" className="text-white font-semibold hover:text-red-400 transition">Log in →</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white focus:outline-none"
                        >
                            {menuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center text-red-100 text-2xl font-semibold transition-all px-6">
                        {/* Close Button */}
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="absolute top-6 right-6 text-white hover:text-red-400"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="flex flex-col items-center gap-6 mt-12">
                            <Link to="/findexpert" onClick={() => setMenuOpen(false)}>Find Experts</Link>
                            <Link to="/explain" onClick={() => setMenuOpen(false)}>How it works</Link>
                            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
                            <Link to="/service" onClick={() => setMenuOpen(false)}>Services</Link>
                            <Link to="/login" onClick={() => setMenuOpen(false)}>Log in</Link>
                        </div>
                    </div>
                )}

            </header>

            {/* Hero Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-white text-4xl sm:text-6xl font-bold drop-shadow-lg animate-fade-in">
                    Trouvez l'expert en finance qui correspond le mieux à votre besoin
                </h1>
                <p className="mt-4 text-white text-lg sm:text-xl max-w-xl drop-shadow-md animate-fade-in delay-200">
                </p>

                <div className="mt-8 flex w-full max-w-lg">
                    <input
                        type="text"
                        placeholder="Search for experts (e.g., Tax Advisor)"
                        className="w-full px-4 py-2 rounded-l-lg text-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-r-lg transition">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
