import { Search, MessageSquare, Handshake } from 'lucide-react';
import Navbar from '../dashboard/sections/navbar';

const Explain = () => {
    return (
        <section>
            <Navbar />
            <section className=" p-6 px-4 py-12 ">
                <div className="max-w-5xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">How FinanceConnect Works</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-md transition">
                        <Search className="w-12 h-12 text-red-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Find Your Expert</h3>
                        <p className="text-sm text-gray-600">
                            Browse our curated list of finance professionals by specialty, rating, and location to find the perfect match for your needs.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-md transition">
                        <MessageSquare className="w-12 h-12 text-red-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Connect & Consult</h3>
                        <p className="text-sm text-gray-600">
                            Reach out directly to experts, discuss your requirements, and schedule initial consultations to ensure a good fit.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-md transition">
                        <Handshake className="w-12 h-12 text-red-500 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Collaborate & Succeed</h3>
                        <p className="text-sm text-gray-600">
                            Work with your chosen finance expert to achieve your financial goals, with secure communication and project management tools.
                        </p>
                    </div>
                </div>

                <div className="bg-red-100 py-10 px-6 rounded-xl text-center">
                    <h4 className="text-xl font-semibold mb-4">Ready to find your finance expert?</h4>
                    <p className="text-gray-700 mb-6">
                        Join FinanceConnect today and gain access to a network of trusted professionals dedicated to your financial success.
                    </p>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg transition">
                        Find Your Expert Now
                    </button>
                </div>
            </section>
        </section>
    );
};

export default Explain;
