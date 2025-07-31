import { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import Navbar from '../dashboard/sections/navbar';
import { Link, useNavigate } from 'react-router-dom';
import useSignupStore from '../../stores/signupStore';

const SignupPage = () => {
    const navigate = useNavigate();

    // Récupération et mise à jour du store signupStore
    const { username, email, password, confirmPassword, setField } = useSignupStore();

    // Local state pour gérer l'erreur simple (ex: mot de passe pas identique)
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords don't match!");
            return;
        }

        // Pas d'erreur => On peut enregistrer dans le store (déjà fait avec set dans inputs)
        // puis naviguer vers la page du choix du type de compte
        navigate('/registertype');
    };

    return (
        <>
            <Navbar />
            <section className="min-h-screen flex items-center justify-center px-4">
                <form
                    onSubmit={handleSubmit}
                    className="max-w-md w-full border rounded-lg shadow-lg p-8"
                >
                    <h2 className="text-2xl font-bold text-center mb-8">Create an Account</h2>

                    {error && (
                        <p className="mb-4 text-red-600 text-center font-semibold">{error}</p>
                    )}

                    {/* Full Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 text-start">
                            Full Name
                        </label>
                        <div className="flex items-center border rounded-md px-3 py-2">
                            <User className="w-5 h-5 text-gray-500 mr-2" />
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your full name"
                                className="w-full outline-none text-sm"
                                value={username}
                                onChange={e => setField("username", e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-start">
                            Email
                        </label>
                        <div className="flex items-center border rounded-md px-3 py-2">
                            <Mail className="w-5 h-5 text-gray-500 mr-2" />
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full outline-none text-sm"
                                value={email}
                                onChange={e => setField("email", e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 text-start">
                            Password
                        </label>
                        <div className="flex items-center border rounded-md px-3 py-2">
                            <Lock className="w-5 h-5 text-gray-500 mr-2" />
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full outline-none text-sm"
                                value={password}
                                onChange={e => setField("password", e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1 text-start">
                            Confirm Password
                        </label>
                        <div className="flex items-center border rounded-md px-3 py-2">
                            <Lock className="w-5 h-5 text-gray-500 mr-2" />
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="Repeat your password"
                                className="w-full outline-none text-sm"
                                value={confirmPassword}
                                onChange={e => setField("confirmPassword", e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-medium transition"
                    >
                        Sign Up
                    </button>

                    {/* Already have an account */}
                    <div className="mt-6 text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-red-500 hover:underline">
                            Log In
                        </Link>
                    </div>
                </form>
            </section>
        </>
    );
};

export default SignupPage;
