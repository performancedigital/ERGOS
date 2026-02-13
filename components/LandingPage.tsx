
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Features from './Features';
import Simulator from './Simulator';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Features />
                <Simulator />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
};

export default LandingPage;
