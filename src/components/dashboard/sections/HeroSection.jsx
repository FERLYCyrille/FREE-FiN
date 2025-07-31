import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="relative bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="" className="-m-1.5 p-1.5">
                            <span className="sr-only">FREEFIN</span>
                            <img
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                alt="Logo"
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Open main menu</span>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="w-6 h-6"
                                aria-hidden="true"
                            >
                                <path d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <Link to="/findexpert" className="text-sm font-semibold text-red-100">Find Experts </Link>
                        <Link to="/explain" className="text-sm font-semibold text-red-100">How it works</Link>
                        <Link to="/about" className="text-sm font-semibold text-red-100">About Us</Link>
                        <Link to="/service" className="text-sm font-semibold text-red-100">Services </Link>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link to="/login" className="text-sm font-semibold text-red-100">
                            Log in <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Hero background image section */}
            <div
                className="relative isolate px-6 pt-32 pb-24 lg:px-8 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/entreprise.jpg')` }} // Remplace par ton image
            >
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

                <div className="relative z-10 mx-auto max-w-2xl text-center text-white">
                    <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                        Find your finance expert
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl">
                        Connect with top-tier finance professionals for all your individual and small business needs.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <input
                            type="text"
                            placeholder="Search for experts (e.g., Tax Advisor)"
                            className="px-4 py-2 w-80 rounded-l text-black focus:outline-none"
                        />
                        <button className="bg-red-500 text-white px-4 py-2 rounded-r hover:bg-red-500">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
