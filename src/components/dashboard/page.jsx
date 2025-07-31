import React from 'react';
import HeroSection from './sections/HeroSection';
import FeaturedExperts from './sections/FeaturedExperts';
import WhyChoose from './sections/WhyChoose';
import Testimonials from './sections/WhyChoose';

const Dashboard = () => {
    return (
        <div className="dashboard-page">
            <HeroSection />
            <FeaturedExperts />
            <WhyChoose />
            <Testimonials />
        </div>
    );
};

export default Dashboard;
