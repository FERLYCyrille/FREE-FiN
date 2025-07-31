import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../dashboard/sections/navbar';
import useUserStore from '../../stores/userStore';


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading, error } = useUserStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(username, password);
        const user = useUserStore.getState().user;
        if (user) {
            if (user.role === 'freelance') {
                navigate('/dashboard/freelance');
            } else if (user.role === 'client') {
                navigate('/dashclient');
            }
        }

    };

    return (
        <>
            <Navbar />
            <section className="min-h-screen flex items-center justify-center px-4">
                <div className="max-w-md w-full border rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-center mb-8">Welcome Back</h2>

                    {/* Username Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1 text-start" htmlFor="username">Username</label>
                        <div className="flex items-center border rounded-md px-3 py-2">
                            <Mail className="w-5 h-5 text-gray-500 mr-2" />
                            <input
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                className="w-full outline-none text-sm"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1 text-start" htmlFor="password">Password</label>
                        <div className="flex items-center border rounded-md px-3 py-2">
                            <Lock className="w-5 h-5 text-gray-500 mr-2" />
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="w-full outline-none text-sm"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && <div className="text-sm text-red-600 mb-4">{error}</div>}

                    {/* Forgot Password */}
                    <div className="text-right mb-6">
                        <a href="#" className="text-sm text-red-500 hover:underline">Forgot Password?</a>
                    </div>

                    {/* Login Button */}
                    <button
                        onClick={handleLogin}
                        disabled={loading}
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-medium transition"
                    >
                        {loading ? 'Logging in...' : 'Log In'}
                    </button>

                    {/* Footer */}
                    <div className="mt-6 text-center text-sm text-gray-600">
                        Don't have an account? <Link to="/register" className="text-red-500 hover:underline">Sign Up</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LoginPage;
