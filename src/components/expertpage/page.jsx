// Structure du composant principal
// src/pages/ExpertsPage.jsx
import FilterBar from './FilterBar'
import ExpertCard from './ExpertCard'
import Pagination from './Pagination'
import Navbar from '../dashboard/sections/navbar'

const experts = [
    {
        name: 'Sarah Chen',
        title: 'Certified Public Accountant',
        rating: 4.9,
        reviews: 120,
        description: 'Specializing in small business tax preparation and financial consulting. Over 10 years of experience.',
        img: '/experts/sarah.jpg'
    },
    {
        name: 'David Lee',
        title: 'Financial Planner',
        rating: 4.8,
        reviews: 95,
        description: 'Helps individuals with retirement planning, investment strategies, and wealth management.',
        img: '/experts/david.jpg'
    },
    {
        name: 'Emily White',
        title: 'Bookkeeping Specialist',
        rating: 5.0,
        reviews: 78,
        description: 'Expert in cloud-based bookkeeping solutions for startups and growing businesses.',
        img: '/experts/emily.jpg'
    },
    {
        name: 'Michael Brown',
        title: 'Investment Advisor',
        rating: 4.7,
        reviews: 110,
        description: 'Provides tailored investment advice and portfolio management for diverse client needs.',
        img: '/experts/michael.jpg'
    },
    {
        name: 'Jessica Green',
        title: 'Forensic Accountant',
        rating: 4.6,
        reviews: 65,
        description: 'Specializes in financial investigations and litigation support for businesses.',
        img: '/experts/jessica.jpg'
    },
    {
        name: 'Robert Johnson',
        title: 'Business Consultant',
        rating: 4.9,
        reviews: 88,
        description: 'Offers strategic financial guidance and operational efficiency improvements for startups.',
        img: '/experts/robert.jpg'
    },
]

export default function ExpertsPage() {
    return (
        <>
            <Navbar />
            <div className="p-6 ">
                <FilterBar />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {experts.map((expert, index) => (
                        <ExpertCard key={index} {...expert} />
                    ))}
                </div>
                <Pagination />
            </div>
        </>
    )
}