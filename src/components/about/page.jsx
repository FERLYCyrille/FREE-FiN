import { Users, Target, Star } from 'lucide-react';
import Navbar from '../dashboard/sections/navbar';
import Footer from '../dashboard/sections/footer'
const AboutFinanceConnect = () => {
    return (
        <>
            <Navbar />
            <section className=" px-4 py-12">
                <div className="max-w-full mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">About FinanceConnect</h2>

                    {/* Mission, Vision, Values */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center p-6 border rounded-lg hover:shadow-md transition">
                            <Target className="w-10 h-10 text-red-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                            <p className="text-sm text-gray-600">
                                Empower individuals and small businesses by connecting them with trusted finance experts. We make financial guidance accessible and straightforward for everyone.
                            </p>
                        </div>
                        <div className="text-center p-6 border rounded-lg hover:shadow-md transition">
                            <Star className="w-10 h-10 text-red-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                            <p className="text-sm text-gray-600">
                                Become the leading platform for freelance finance professionals, where expertise meets opportunity and financial well-being is within reach.
                            </p>
                        </div>
                        <div className="text-center p-6 border rounded-lg hover:shadow-md transition">
                            <Users className="w-10 h-10 text-red-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                            <p className="text-sm text-gray-600">
                                Trust, excellence, accessibility, and innovation. We’re driven by the values that shape financial success and meaningful partnerships.
                            </p>
                        </div>
                    </div>

                    {/* Team Members */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-center mb-6">Meet the Team</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                { name: 'Jane Doe', title: 'CEO & Founder' },
                                { name: 'John Smith', title: 'Head of Product' },
                                { name: 'Emily White', title: 'Lead Financial Advisor' },
                                { name: 'David Green', title: 'Community Manager' },
                            ].map((member, index) => (
                                <div key={index} className="p-4 border rounded-lg hover:shadow-md transition">
                                    <Users className="w-10 h-10 text-red-500 mx-auto mb-2" />
                                    <h4 className="font-semibold">{member.name}</h4>
                                    <p className="text-sm text-gray-600">{member.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-red-100 py-10 px-6 rounded-xl text-center">
                        <h4 className="text-xl font-semibold mb-4">Ready to connect with finance experts?</h4>
                        <p className="text-gray-700 mb-6">
                            Join FinanceConnect today and find your trusted advisor to help you achieve your financial goals.
                        </p>
                        <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-lg transition">
                            Find Your Expert Now
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default AboutFinanceConnect;
