import React from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/sections/Footer';
import AboutUs from '@/components/sections/AboutUs';

const AboutUsPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <AboutUs />
            <Footer />
            
        </>
    );
};

export default AboutUsPage;