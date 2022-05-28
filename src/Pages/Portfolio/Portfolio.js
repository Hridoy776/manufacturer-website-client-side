import React from 'react';
import Footer from '../HomePage/Footer';
import Navbar from '../HomePage/Navbar';
import AboutMe from './AboutMe';
import PortfolioBanner from './PortfolioBanner';
import Technology from './Technology';

const Portfolio = () => {
    return (
        <div className='min-h-screen'>
            <Navbar/>
            <PortfolioBanner/>
            <AboutMe/>
            <Technology/>
            <Footer/>
        </div>
    );
};

export default Portfolio;