import { useState } from 'react';
import { User, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../dashboard/sections/navbar';
import useSignupStore from '../../stores/signupStore';
import useUserStore from '../../stores/userStore';

const AccountTypePage = () => {
    const navigate = useNavigate();
    const { username, email, password } = useSignupStore();
    const register = useUserStore(state => state.register);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleRegister = async (role) => {
        setLoading(true);
        setError(null);
        try {
            await register(username, email, password, role);
            setLoading(false);
            navigate('/login'); // redirection après inscription
        } catch (err) {
            setLoading(false);
            setError('Registration failed. Please try again.');
            alert("ok not good")
        }
    };

    return (
        <>
            <Navbar />
            <section className="min-h-screen flex items-center justify-center px-4">
                <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Client Option */}
                    <div className="p-6 border rounded-lg shadow hover:shadow-md text-center">
                        <User className="w-12 h-12 text-red-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">I'm a Client</h3>
                        <p className="text-gray-600 mb-6 text-sm">
                            Find and book finance professionals for your personal or business needs.
                        </p>
                        <button
                            onClick={() => handleRegister('client')}
                            disabled={loading}
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded transition"
                        >
                            {loading ? 'Signing Up...' : 'Sign Up as Client'}
                        </button>
                    </div>

                    {/* Freelancer Option */}
                    <div className="p-6 border rounded-lg shadow hover:shadow-md text-center">
                        <Briefcase className="w-12 h-12 text-red-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">I'm a Freelancer</h3>
                        <p className="text-gray-600 mb-6 text-sm">
                            Offer your financial expertise to a wide range of clients and grow your business.
                        </p>
                        <button
                            onClick={() => handleRegister('freelance')}
                            disabled={loading}
                            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded transition"
                        >
                            {loading ? 'Signing Up...' : 'Sign Up as Freelancer'}
                        </button>
                    </div>

                    {error && <p className="text-red-600 text-center col-span-full">{error}</p>}
                </div>
            </section>
        </>
    );
};

export default AccountTypePage;
