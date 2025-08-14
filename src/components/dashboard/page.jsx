import React from 'react';
import HeroSection from './sections/HeroSection';
import FeaturedExperts from './sections/FeaturedExperts';
import WhyChoose from './sections/WhyChoose';
import Testimonials from './sections/Testimonials';
import Footer from './sections/footer';

const Dashboard = () => {
    return (
        <div className="dashboard-page">
            <HeroSection />
            <FeaturedExperts />
            <WhyChoose />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Dashboard;
