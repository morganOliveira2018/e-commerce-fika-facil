import React from 'react';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import '../../App.css';
import HeroSection from '../HeroSection/HeroSection';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards/>
            <Footer/>
        </>
    );
}

export default Home;